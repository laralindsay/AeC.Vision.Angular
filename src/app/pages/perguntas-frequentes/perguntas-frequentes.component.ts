import { Component, inject } from '@angular/core';
import { BreadcrumbItem } from '@app/components/breadcrumb/breadcrumb.component';

import { AuthService } from '@app/services/auth.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.scss'],
})
export class PerguntasFrequentesComponent {

  private readonly confirmationService = inject(ConfirmationService);
  private readonly authService = inject(AuthService);

  breadcrumbs: BreadcrumbItem[] = [
    { label: 'PERGUNTAS FREQUENTES', icon: 'pi pi-question-circle' },
  ];
}
