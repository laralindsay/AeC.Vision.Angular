import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  getProductsData() {
    return [
      {
        matricula: 111111,
        operador: 'AAA ARAUJO SOUSA',
        supervisor: 'AAA DA SILVA E SILVA',
        data: '01/02/2023  18:06:17',
        horaFim: '01/02/2023  18:20:51',
        tempo: '02:21:11',
        tipo: 'INATIVIDADE',
        status: 'Lido'
      },
      {
        matricula: 111111,
        operador: 'AAA ARAUJO SOUSA',
        supervisor: 'AAA DA SILVA E SILVA',
        data: '01/02/2023  18:06:17',
        horaFim: '01/02/2023  18:20:51',
        tempo: '02:21:11',
        tipo: 'INATIVIDADE',
        status: 'Lido'
      },
      {
        matricula: 111111,
        operador: 'AAA ARAUJO SOUSA',
        supervisor: 'AAA DA SILVA E SILVA',
        data: '01/02/2023  18:06:17',
        horaFim: '01/02/2023  18:20:51',
        tempo: '02:21:11',
        tipo: 'INATIVIDADE',
        status: 'Lido'
      },
      {
        matricula: 111111,
        operador: 'AAA ARAUJO SOUSA',
        supervisor: 'AAA DA SILVA E SILVA',
        data: '01/02/2023  18:06:17',
        horaFim: '01/02/2023  18:20:51',
        tempo: '02:21:11',
        tipo: 'INATIVIDADE',
        status: 'Lido'
      },
      {
        matricula: 111111,
        operador: 'AAA ARAUJO SOUSA',
        supervisor: 'AAA DA SILVA E SILVA',
        data: '01/02/2023  18:06:17',
        horaFim: '01/02/2023  18:20:51',
        tempo: '02:21:11',
        tipo: 'INATIVIDADE',
        status: 'Lido'
      },
    ];
  }

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
}
