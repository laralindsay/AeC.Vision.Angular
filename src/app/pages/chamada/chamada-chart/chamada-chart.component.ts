import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartData, ChartDataset, ChartOptions } from "chart.js";
import { ChartModule } from "primeng/chart";
import { DateTime } from "luxon";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { LoadingComponent } from "@components/loading/loading.component";

@Component({
  selector: 'app-chamada-chart',
  standalone: true,
  imports: [CommonModule, ChartModule, LoadingComponent],
  templateUrl: './chamada-chart.component.html',
  styleUrls: ['./chamada-chart.component.scss']
})
export class ChamadaChartComponent {

  response = computed(() => {
    return [...data];
  });

  loading = signal(false);
  hasError = signal(false);
  canShow = computed(() => {
    return !this.loading() && !this.hasError();
  });

  chartData = computed<ChartData | undefined>(() => {
    const response = this.response();
    if ( !response ) {
      return undefined;
    }

    const labelGrouping: {
      [s: string]: StackData[]
    } = {};
    const labels = [...new Set(response.map(x => x.categoria))];

    return {
      labels: labels,
      datasets: response
        .sort((a, b) => a.inicio.getTime() - b.inicio.getTime())
        .map(evento => {
          let start = evento.inicio.getTime();
          let end = evento.fim.getTime();

          let stack: StackData;
          let firstStackEntry = false;

          if ( labelGrouping[evento.categoria] === undefined ) {
            stack = { stack: 'Stack0', lastDate: evento.fim };
            labelGrouping[evento.categoria] = [stack];
            firstStackEntry = true;
          }
          else {
            labelGrouping[evento.categoria].forEach((item) => {
              if ( !stack && item.lastDate.getTime() <= evento.inicio.getTime() ) {
                stack = { ...item };
                item.lastDate = evento.fim;
              }
            });

            // @ts-ignore
            if ( !stack ) {
              const stackIndex = labelGrouping[evento.categoria].length;
              stack = {
                stack: `Stack${stackIndex}`,
                lastDate: evento.fim
              };
              labelGrouping[evento.categoria].push(stack);
              firstStackEntry = true;
            }
          }

          let data: any[] = labels.map(() => null);
          if ( !firstStackEntry ) {
            start -= stack.lastDate.getTime();
            end -= stack.lastDate.getTime();
          }


          const diff = DateTime.fromJSDate(evento.fim).diff(DateTime.fromJSDate(evento.inicio), 'seconds').as('seconds');
          const diffTime =  new SecondsToTimePipe().transform( diff );

          data[labels.indexOf(evento.categoria)] = [
            start,
            end,
            {
              start: evento.inicio.getTime(),
              end: evento.fim.getTime(),
              duration: diffTime,
            } as PointData,
          ];

          return {
            label: evento.categoria,
            data: data,
            skipNull: true,
            stack: `${evento.categoria}_${stack.stack}`,
            borderRadius: 15,
            borderSkipped: false,
            backgroundColor: ChartColors[evento.categoria] ?? '#CCC',
          } as ChartDataset;
        })
    }
  });

  options = computed<ChartOptions>(() => {
    return {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      // aspectRatio: 32 / 9,
      plugins: {
        tooltip: {
          callbacks: {
            title: () => "",
            afterBody: (items) => {
              const datasetIndex = items[0].datasetIndex;
              const dataIndex = items[0].dataIndex;
              const [pointStart, pointEnd, data] = this.chartData()?.datasets[datasetIndex].data[dataIndex] as unknown as [number, number, PointData];
              const start = DateTime.fromMillis(data.start).toFormat('HH:mm:ss');
              const end = DateTime.fromMillis(data.end).toFormat('HH:mm:ss');
              return `Início: ${start} \nFim: ${end} \nDuração: ${(data.duration)}`;
            },
            label: (item) => this.chartData()?.datasets[item.datasetIndex].label as string,
          },
        },
        legend: {
          display: false
        },
        datalabels: {
          color: 'white',
          anchor: 'center',
          align: 'center',
          formatter: (value) => value?.[2].duration ?? '',
          display: (context) => {
            const scale = context.chart.scales['x'];
            const value = (context.dataset.data[context.dataIndex] as any)?.[2] as PointData;
            if ( !value ) {
              return false;
            }

            const range = Math.max(scale.max - scale.min, 1);
            const duration = value.end - value.start;
            // console.log(value.duration, (context.chart.width / range) * duration);
            return (context.chart.width / range) * duration > 50;
          },
        }
      },
      scales: {
        x: {
          min: Math.min(...this.response().map((event) => event.inicio.getTime())),
          max: Math.max(...this.response().map((event) => event.fim.getTime())),
          ticks: {
            autoSkip: true,
            maxTicksLimit: 15,
          },
          type: "time",
          time: {
            displayFormats: {
              millisecond: "HH:mm:ss.SSS",
              second: "HH:mm:ss",
              minute: "HH:mm:ss",
              hour: "HH:mm:ss",
              day: "HH:mm:ss",
              week: "HH:mm:ss",
              month: "HH:mm:ss",
              quarter: "HH:mm:ss",
              year: "HH:mm:ss"
            },
            unit: "second"
          },
          stacked: true
        },
        y: {
          stacked: true,
          ticks: {
            autoSkip: false,
          },
        }
      }
    }
  });

  hasData = computed(() => {
    return !!this.chartData()?.datasets?.length;
  });

  tryAgain() {

  }
}

const data: ChamadaChartItems[] = [
  { inicio: new Date('2023-11-10T12:00:00'), fim: new Date('2023-11-10T12:01:00'), categoria: 'Silêncio' },
  { inicio: new Date('2023-11-10T12:01:30'), fim: new Date('2023-11-10T12:02:00'), categoria: 'Silêncio' },
  { inicio: new Date('2023-11-10T12:01:30'), fim: new Date('2023-11-10T12:03:00'), categoria: 'Navegação em Sistemas' },
  { inicio: new Date('2023-11-10T12:05:00'), fim: new Date('2023-11-10T12:06:00'), categoria: 'Navegação em Sistemas' },
  { inicio: new Date('2023-11-10T12:06:10'), fim: new Date('2023-11-10T12:09:00'), categoria: 'Navegação em Sistemas' },
  { inicio: new Date('2023-11-10T12:06:00'), fim: new Date('2023-11-10T12:07:00'), categoria: 'Ausência' },
  { inicio: new Date('2023-11-10T12:07:30'), fim: new Date('2023-11-10T12:08:00'), categoria: 'Ausência' },
  { inicio: new Date('2023-11-10T12:07:40'), fim: new Date('2023-11-10T12:08:00'), categoria: 'Inatividade' },
  { inicio: new Date('2023-11-10T12:10:10'), fim: new Date('2023-11-10T12:10:20'), categoria: 'Inatividade' },
  { inicio: new Date('2023-11-10T12:08:50'), fim: new Date('2023-11-10T12:09:00'), categoria: 'Improdutividade' },
]

interface ChamadaChartItems {
  inicio: Date;
  fim: Date;
  categoria: string;
}

interface StackData {
  stack: string;
  lastDate: Date;
}

interface PointData {
  start: number;
  end: number;
  duration: string;
}

const ChartColors: {[s: string]: string} = {
  'Improdutividade': '#27B979',
  'Inatividade': '#FF2E00',
  'Silêncio': '#FF7A00',
  'Ausência': '#00BCE4',
  'Navegação em Sistemas': '#003F5F',
}
