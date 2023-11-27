import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vision360ApiModule } from '@api-vision360/vision-360-api.module';
import { environment } from '@environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Vision360ApiModule.forRoot({ rootUrl: environment.apiUrl })
  ]
})
export class ApiConfigModule { }
