import { ChangeDetectorRef, DestroyRef, Directive, HostListener, inject, Injector, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, catchError, EMPTY, finalize, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export type DatasourceRequest = Observable<any[]> | ((filter: string) => Observable<any[]>);

@Directive()
export abstract class DatasourceGenericDirective implements OnInit {
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected readonly ngControl = inject(NgControl, { optional: true });
  protected readonly destroyRef = inject(DestroyRef);
  protected readonly injector = inject(Injector);

  protected originalProperties: Map<string, any> = new Map();
  protected hasError = false;
  protected doRequest$ = new BehaviorSubject<void>(undefined);

  @Input() loadingMessage = 'Carregando...';
  @Input() errorMessage = 'Falha ao carregar!';

  @Input() appDatasource?: DatasourceRequest;

  constructor() {
    this.originalProperties.set('disabled', this.ngControl?.disabled);
    this.ngControl?.statusChanges?.pipe(
      startWith(this.ngControl.status),
      takeUntilDestroyed(this.destroyRef),
      tap(status => this.originalProperties.set('disabled', (status === 'DISABLED')))
    ).subscribe();
  }

  ngOnInit() {
    this.loadData();
  }

  beforeRequest() {}
  requestSuccess(options: object[]) {}
  requestError(error: any): void | Observable<object[]> {}
  requestFinalize() {}

  loadData() {
    this.doRequest$.pipe(
      takeUntilDestroyed(this.destroyRef),
      tap(() => this.beforeRequest()),
      tap(() => {
        this.hasError = false;
      }),
      switchMap(() => this.getRequest().pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(options => {
          this.requestSuccess(options);
          this.changeDetectorRef.detectChanges();
        }),
        catchError(error => {
          const parseError = this.requestError(error);
          this.changeDetectorRef.detectChanges();
          this.hasError = true;
          return parseError ?? EMPTY;
        }),
        finalize(() => {
          this.changeDetectorRef.detectChanges();
          this.requestFinalize();
        })
      ))
    ).subscribe();
  }

  @HostListener('click', ['$event'])
  onClick(): void {
    if ( this.hasError ) {
      this.doRequest$.next();
    }
  }

  private getRequest() {
    if ( this.appDatasource instanceof Observable ) {
      return this.appDatasource;
    }
    if ( typeof this.appDatasource === 'function' ) {
      return this.appDatasource('');
    }
    return EMPTY;
  }
}
