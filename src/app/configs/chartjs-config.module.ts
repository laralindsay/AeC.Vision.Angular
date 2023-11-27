import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ChartModule } from "primeng/chart";
import { Chart } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

import 'chartjs-adapter-luxon';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
  ],
  exports: [
    ChartModule
  ]
})
export class ChartjsConfigModule { }
