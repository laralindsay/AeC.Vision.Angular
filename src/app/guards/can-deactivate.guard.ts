import { CanDeactivateFn } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export interface CanDeactivateComponent {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanDeactivateComponent> = (component: CanDeactivateComponent, currentRoute, currentState, nextState) => {
  const confirmationService = inject(ConfirmationService);

  if ( typeof component?.canDeactivate !== 'function' ) {
    console.error(`[canDeactivateGuard] Componente '${component?.constructor?.name}' não implementa a interface 'CanDeactivateComponent'.`);
    return true;
  }

  if ( component.canDeactivate() ) {
    return true;
  }

  return new Observable((observer) => {
    confirmationService.confirm({
      key: 'dialog',
      header: 'Alterações não salvas',
      message: 'Existem alterações não salvas, deseja realmente sair? Todos os dados serão perdidos.',
      acceptLabel: 'Sair mesmo assim',
      rejectLabel: 'Permanecer na página',
      rejectButtonStyleClass: 'p-button-outlined',
      accept: () => {
        observer.next(true);
        observer.complete();
      },
      reject: () => {
        observer.next(false);
        observer.complete();
      }
    });
  });
};
