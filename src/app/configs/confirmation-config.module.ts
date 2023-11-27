import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  imports: [
    ConfirmDialogModule,
    ConfirmPopupModule
  ],
  exports: [
    ConfirmDialogModule,
    ConfirmPopupModule,
  ],
  providers: [
    ConfirmationService,
  ]
})
export class ConfirmationConfigModule { }
