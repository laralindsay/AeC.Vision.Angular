import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";
import { PageComponent, PageTemplateDirective } from "@layout/page/page.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { SkeletonModule } from "primeng/skeleton";
import { ChamadasResumoComponent } from "@pages/chamadas/chamadas-resumo/chamadas-resumo.component";
import { ChamadasTableComponent } from "@pages/chamadas/chamadas-table/chamadas-table.component";
import { BreadcrumbComponent } from "@components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-chamadas',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTemplateDirective, SkeletonModule, ChamadasResumoComponent, ChamadasTableComponent, BreadcrumbComponent],
  templateUrl: './chamadas.component.html',
  styleUrls: ['./chamadas.component.scss'],
})
export class ChamadasComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);
  private readonly loggedUserService = inject(LoggedUserService);

  routeInfo$ = this.pageService.getRouteInfoWithoutFilter(this.activatedRoute);
  routeInfo = toSignal(this.routeInfo$);

  currentUser = toSignal(this.loggedUserService.user$);

  routerLinkGestao = computed(() => {
    const adminOrMain = this.currentUser()?.admin ? 'admin' : 'main';
    const info = this.routeInfo();
    const perfil = this.routeInfo()?.perfil;
    const matricula = this.routeInfo()?.matricula;

    if ( !info || perfil == null || !matricula ) {
      return `/${adminOrMain}/gestao/`;
    }

    return `/${adminOrMain}/gestao/${ProfileEnum[perfil].toLocaleLowerCase()}/${matricula}`;
  });

  ngOnInit() {
    // this.pageService.filterForm.reset();
  }
}
