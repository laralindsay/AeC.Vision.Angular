import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastService } from '@services/toast.service';

@NgModule({
  imports: [
    ToastModule
  ],
  exports: [
    ToastModule
  ],
  providers: [
    MessageService,
    {
      provide: ToastService,
      deps: [MessageService],
    },
  ]
})
export class ToastConfigModule { }
