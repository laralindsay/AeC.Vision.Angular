import { Component, computed, inject } from '@angular/core';
import { MenuItem, MenuItemComponent } from '@layout/menu//menu-item/menu-item.component';

import { CommonModule } from '@angular/common';
import { LoggedUserService } from '@services/logged-user.service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MenuItemComponent,
  ]
})
export class MenuComponent {
  private readonly loggedUserService = inject(LoggedUserService);

  isAdmin$ = this.loggedUserService.isAdmin$;
  isAdmin = toSignal(this.isAdmin$, { requireSync: true });

  menuItems = computed(() => {
    return this.isAdmin() ? this._menuItemsAdmin : this._menuItems;
  });

  // routerLink: '/main/gestao'  , routerLink: '/main/perguntas-frequentes'

  _menuItems: MenuItem[] = [
    { label: 'Gestão', icon: 'pi pi-chart-bar', routerLink: '/main/gestao' },
    { label: 'Perguntas Frequentes', icon: 'pi pi-question-circle', routerLink: '/main/perguntas-frequentes' },
  ];


// routerLink: '/admin/sistemas' , routerLink: '/admin/segmentos', routerLink: '/admin/administradores'

  _menuItemsAdmin: MenuItem[] = [
    {
      label: 'Configurações',
      icon: 'pi pi-cog',
      children: [
        { label: 'Sistemas', icon: 'pi pi-wrench', routerLink: '/admin/sistemas' },
        { label: 'Parametrização', icon: 'pi pi-sliders-h', routerLink: '/admin/parametrizacao' },
        { label: 'Administradores', icon: 'pi pi-user', routerLink: '/admin/administradores' },
      ],
    },
    { label: 'Perguntas Frequentes', icon: 'pi pi-question-circle', routerLink: '/admin/perguntas-frequentes' },
  ]

  menuItemHome: MenuItem = {
    label: '',
    icon: "",
    routerLink: '/main/dashboard'
  };
}
