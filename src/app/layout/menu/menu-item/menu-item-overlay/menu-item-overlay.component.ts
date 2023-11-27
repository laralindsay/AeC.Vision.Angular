import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@layout/menu/menu-item/menu-item.component';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu-item-overlay',
  standalone: true,
  imports: [CommonModule, MenuModule],
  templateUrl: './menu-item-overlay.component.html',
  styleUrls: ['./menu-item-overlay.component.scss']
})
export class MenuItemOverlayComponent {

  options?: MenuItem[];
}
