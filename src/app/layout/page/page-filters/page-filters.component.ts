import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";
import { DatasourcePDropdownDirective } from "@app/directives/datasource-p-dropdown.directive";
import { CalendarModule } from "primeng/calendar";
import { ReactiveFormsModule } from "@angular/forms";
import { PageService } from "@services/page.service";
import { of, startWith, switchMap } from "rxjs";
import { HttpDashboardService } from "@api-vision360/services";
import { DateTime } from "luxon";

@Component({
  selector: 'app-page-filters',
  standalone: true,
  imports: [CommonModule, InputNumberModule, DropdownModule, DatasourcePDropdownDirective, CalendarModule, ReactiveFormsModule],
  templateUrl: './page-filters.component.html',
  styleUrls: ['./page-filters.component.scss']
})
export class PageFiltersComponent {

  private readonly pageService = inject(PageService);
  private readonly httpDashboardService = inject(HttpDashboardService);

  @Input() hasFilters?: boolean;
  @Input() hasMatriculaFilter?: boolean;
  @Input() hasOperacaoFilter?: boolean;
  @Input() hasSegmentoFilter?: boolean;
  @Input() hasDateFilter?: boolean;

  form = this.pageService.filterForm;

  minDateVal = DateTime.now().minus({ day: 7 }).toJSDate();
  maxDateVal = new Date();

  operacoes$ = this.httpDashboardService.apiDashboardOperacaoGet$Json();
  segmentos$ = this.form.controls.operacaoId.valueChanges.pipe(
    startWith(this.form.value.operacaoId),
    switchMap((idOperacao) => {
      if (!idOperacao) {
        return of([]);
      }
      return this.httpDashboardService.apiDashboardSegmentoGet$Json({
        idOperacao: idOperacao ?? -1,
      });
    })
  );
}
