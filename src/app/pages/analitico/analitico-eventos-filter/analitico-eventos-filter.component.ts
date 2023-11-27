import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnaliticoEventosComponent } from "@pages/analitico/analitico-eventos/analitico-eventos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DatasourcePDropdownDirective } from "@app/directives/datasource-p-dropdown.directive";
import { DropdownModule } from "primeng/dropdown";
import { HttpEventoService } from "@api-vision360/services/http-evento.service";
import { combineLatestWith, of, startWith, switchMap } from "rxjs";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from "primeng/calendar";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-analitico-eventos-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ReactiveFormsModule, DatasourcePDropdownDirective, DropdownModule, InputNumberModule, CalendarModule],
  templateUrl: './analitico-eventos-filter.component.html',
  styleUrls: ['./analitico-eventos-filter.component.scss']
})
export class AnaliticoEventosFilterComponent implements OnInit {

  private readonly httpEventoService = inject(HttpEventoService);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  @Input({ required: true }) filterForm!: AnaliticoEventosComponent['filterForm'];

  maxDate = new Date();

  routeInfo$ = this.pageService.getRouteInfoWithoutFilter(this.activatedRoute);

  tipoEvento$ = this.httpEventoService.apiEventoTipoEventoGet$Json();
  operacao$ = this.routeInfo$.pipe(
    switchMap(routeInfo => {
      return this.httpEventoService.apiEventoOperacaoGet$Json({
        perfil: routeInfo.perfil,
        matricula: routeInfo.matricula?.toString(),
      });
    })
  );
  segmento$?: ReturnType<HttpEventoService['apiEventoSegmentoGet$Json']>;

  currentUser = toSignal(this.loggedUserService.user$);
  showSupervisorFilter = computed(() => {
    const currentUser = this.currentUser();
    return currentUser?.idPerfil && (currentUser.idPerfil > ProfileEnum.Supervisor);
  });

  ngOnInit() {
    this.segmento$ = this.filterForm.controls.operacao.valueChanges.pipe(
      startWith(this.filterForm.value.operacao),
      combineLatestWith(
        this.routeInfo$,
      ),
      switchMap(([idOperacao, routeInfo]) => {
        if (!idOperacao) {
          return of([]);
        }
        return this.httpEventoService.apiEventoSegmentoGet$Json({
          idOperacao: idOperacao ?? -1,
          matricula: routeInfo.matricula?.toString(),
          perfil: routeInfo.perfil,
        });
      })
    );
  }
}
