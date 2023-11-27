import { Injectable, inject } from '@angular/core';

import { HttpDashboardService } from 'src/api-vision360/services'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpDashboardService = inject(HttpDashboardService);

dashboard(data: DashboardData) {
  return this.httpDashboardService.apiDashboardOperacaoGet$Json({
    body: {
      id: data?.id,
      nome: data?.nome
    }
  })
}

  getProductsData() {
    return [
      {
        matricula: 111111,
        nome: 'SUPERVISOR AAA DA SILVA E SILVA',
        operacao: 'OP. 01',
        improdutividade: '10:24:21',
        inatividade: '02:21:11',
        silencio: '02:21:11',
        ausencia: '02:21:11',
      },
      {
        matricula: 111111,
        nome: 'SUPERVISOR AAA DA SILVA E SILVA',
        operacao: 'OP. 01',
        improdutividade: '10:24:21',
        inatividade: '02:21:11',
        silencio: '02:21:11',
        ausencia: '02:21:11',
      },{
        matricula: 111111,
        nome: 'SUPERVISOR AAA DA SILVA E SILVA',
        operacao: 'OP. 01',
        improdutividade: '10:24:21',
        inatividade: '02:21:11',
        silencio: '02:21:11',
        ausencia: '02:21:11',
      },{
        matricula: 111111,
        nome: 'SUPERVISOR AAA DA SILVA E SILVA',
        operacao: 'OP. 01',
        improdutividade: '10:24:21',
        inatividade: '02:21:11',
        silencio: '02:21:11',
        ausencia: '02:21:11',
      },{
        matricula: 111111,
        nome: 'SUPERVISOR AAA DA SILVA E SILVA',
        operacao: 'OP. 01',
        improdutividade: '10:24:21',
        inatividade: '02:21:11',
        silencio: '02:21:11',
        ausencia: '02:21:11',
      }
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
}

interface DashboardData {
  id?: number;
  nome?: string;
}
