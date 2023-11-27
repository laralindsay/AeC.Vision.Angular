import { Component, computed, DestroyRef, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from "primeng/tooltip";
import { PageService } from "@services/page.service";
import { catchError, combineLatestWith, EMPTY, switchMap } from "rxjs";
import { takeUntilDestroyed, toObservable, toSignal } from "@angular/core/rxjs-interop";
import { LoggedUserService } from "@services/logged-user.service";
import { HttpUsuarioService } from "@api-vision360/services/http-usuario.service";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, RippleModule, TooltipModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  private readonly destroyRef = inject(DestroyRef);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly httpUsuarioService = inject(HttpUsuarioService);

  @Input() backButtonRouterLink?: string;

  items = signal<BreadcrumbItem[] | undefined>(undefined);
  @Input({ alias: 'items' })
  set _items(items: BreadcrumbItems) {
    this.items.set(items);
  }

  byRoute = signal<boolean>(false);
  @Input({ alias: 'byRoute' })
  set _byRoute(byRoute: boolean) {
    this.byRoute.set(byRoute);
  }
  byRoute$ = toObservable(this.byRoute);


  funcionario$ = this.pageService.getRouteInfoWithoutFilter(this.activatedRoute).pipe(
    combineLatestWith(
      this.loggedUserService.user$,
      this.byRoute$,
    ),
    filter(([page, user, byRoute]) => byRoute),
    switchMap(([info, currentUser]) => {
      if (info.matricula === Number(currentUser?.matricula)) {
        return this.loggedUserService.user$;
      }

      return this.httpUsuarioService.apiUsuarioMatriculaIdGet$Json({
        id: info.matricula
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError(() => {
          return EMPTY;
        })
      );
    })
  );
  funcionario = toSignal(this.funcionario$);

  funcionarioBreadcrumb = computed<BreadcrumbItem | undefined>(() => {
    const funcionario = this.funcionario();
    if ( !funcionario ) {
      return undefined;
    }
    return { label: funcionario.nome ?? '', description: funcionario.perfil?.nome ?? '' } as BreadcrumbItem;
  })

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const items = this.items() ?? [];
    const breadCrumbs = [
      ...items,
      this.byRoute() ? this.funcionarioBreadcrumb() : undefined,
    ].filter(x => !!x) as BreadcrumbItem[];

    return breadCrumbs.map((x, i) => ({
      ...x,
      labelClass: (i + 1) === breadCrumbs.length ? 'text-primary' : 'text-muted',
    }))
  });
}

export type BreadcrumbItems = BreadcrumbItem[];

export interface BreadcrumbItem {
  label: string;
  labelClass?: string;

  icon?: string;
  description?: string;

  routerLink?: string;
  queryParams?: { [key: string]: any };
}
