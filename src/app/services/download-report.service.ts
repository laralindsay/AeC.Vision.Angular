import { inject, Injectable } from '@angular/core';
import { AlertaRequestViewModelHttp } from "@api-vision360/models/alerta-request-view-model-http";
import { environment } from "@environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DownloadReportService {

  private readonly httpClient = inject(HttpClient);

  downloadAlertasPdf(params: AlertaRequestViewModelHttp) {
    return this.httpClient.post(environment.apiUrl + '/api/Alerta/pdf', params, {
      responseType: 'blob',
    });
  }

  downloadAlertasCsv(params: AlertaRequestViewModelHttp) {
    return this.httpClient.post(environment.apiUrl + '/api/Alerta/csv', params, {
      responseType: 'blob',
    });
  }
}
