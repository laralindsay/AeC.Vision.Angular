import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTemplateDirective } from "@layout/page/page.component";
import { BreadcrumbComponent, BreadcrumbItems } from "@components/breadcrumb/breadcrumb.component";
import { ChamadaStatusComponent } from "@pages/chamada/chamada-status/chamada-status.component";
import { ChamadaChartComponent } from "@pages/chamada/chamada-chart/chamada-chart.component";

@Component({
  selector: 'app-chamada',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTemplateDirective, BreadcrumbComponent, ChamadaStatusComponent, ChamadaChartComponent],
  templateUrl: './chamada.component.html',
  styleUrls: ['./chamada.component.scss']
})
export class ChamadaComponent {
  // breadcrumbs = computed<BreadcrumbItems>(() => {
    // return [
    //   { label: 'Visão geral', routerLink:  }
    // ]
  // })
}
