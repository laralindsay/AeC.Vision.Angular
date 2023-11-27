import { Component, computed, DestroyRef, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RippleModule } from 'primeng/ripple';
import { HttpAlertaService } from '@api-vision360/services';
import { DatasourcePDropdownDirective } from '@app/directives/datasource-p-dropdown.directive';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { saveAs } from 'file-saver';
import { ToastService } from '@services/toast.service';
import { DownloadReportService } from "@services/download-report.service";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { DashboardAlertasComponent } from "@pages/dashboard/dashboard-alertas/dashboard-alertas.component";

@Component({
  selector: 'app-dashboard-filtro-alertas',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    CalendarModule,
    RippleModule,
    DatasourcePDropdownDirective,
  ],
  templateUrl: './dashboard-filtro-alertas.component.html',
  styleUrls: ['./dashboard-filtro-alertas.component.scss'],
})
export class DashboardFiltroAlertasComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly toastService = inject(ToastService);
  private readonly httpAlertasService = inject(HttpAlertaService);
  private readonly downloadReportService = inject(DownloadReportService);
  private readonly loggedUserService = inject(LoggedUserService);

  @Input({ required: true }) form!: DashboardAlertasComponent['filterForm'];

  currentUser = toSignal(this.loggedUserService.user$);
  showFiltroSupervisor = computed(() => {
    const currentUser = this.currentUser();
    return currentUser?.idPerfil && currentUser.idPerfil > ProfileEnum.Supervisor;
  })

  tipo$ = this.httpAlertasService.apiAlertaTipoAlertaGet$Json();
  status$ = this.httpAlertasService.apiAlertaStatusAlertaGet$Json();
  tempo$ = this.httpAlertasService.apiAlertaDuracaoAlertaGet$Json();

  loading = {
    csv: false,
    pdf: false,
  };

  downloadCsv() {
    if (this.loading.csv) {
      return;
    }
    this.loading.csv = true;
    this.downloadReportService
      .downloadAlertasCsv(this.form.value)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.loading.csv = false)),
        tap((response) => {
          this.toastService.success('Download iniciado!');
          saveAs(response, 'alertas.csv');
        }),
        catchError(() => {
          this.toastService.error(
            'Falha no download do relatório.',
            'Tente novamente mais tarde'
          );
          return EMPTY;
        })
      )
      .subscribe();
  }

  downloadPdf() {
    if (this.loading.pdf) {
      return;
    }
    this.loading.pdf = true;
    this.downloadReportService
      .downloadAlertasPdf(this.form.value)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.loading.pdf = false)),
        tap((response) => {
          this.toastService.success('Download iniciado!');
          saveAs(response, 'alertas.pdf');
        }),
        catchError(() => {
          this.toastService.error(
            'Falha no download do relatório.',
            'Tente novamente mais tarde'
          );
          return EMPTY;
        })
      )
      .subscribe();
  }
}
