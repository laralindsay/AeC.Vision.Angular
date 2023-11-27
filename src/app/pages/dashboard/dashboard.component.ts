import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTemplateDirective } from "@layout/page/page.component";
import { DashboardHierarquiaComponent } from "@pages/dashboard/dashboard-hierarquia/dashboard-hierarquia.component";
import { DashboardAlertasComponent } from "@pages/dashboard/dashboard-alertas/dashboard-alertas.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { LoggedUserService } from "@services/logged-user.service";
import { IndicadoresComponent } from "@components/indicadores/indicadores.component";
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";
import { combineLatestWith } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTemplateDirective, DashboardHierarquiaComponent, DashboardAlertasComponent, IndicadoresComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  isAdmin = toSignal(this.loggedUserService.isAdmin$);
  isCurrentUser = toSignal(
    this.pageService.getRouteInfo(this.activatedRoute).pipe(
      combineLatestWith(
        this.loggedUserService.user$
      ),
      map(([routeInfo, currentUser]) => {
        return routeInfo?.matricula === Number(currentUser?.matricula);
      })
  ));

  canShowAlertas = computed(() => {
    return !this.isAdmin() && this.isCurrentUser();
  })

  ngOnInit() {
    if ( this.isCurrentUser() ) {
      this.pageService.filterForm.reset();
    }
  }
}
