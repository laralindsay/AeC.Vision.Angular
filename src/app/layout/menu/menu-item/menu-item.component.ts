import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MenuItemOverlayComponent } from '@layout/menu/menu-item/menu-item-overlay/menu-item-overlay.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [
    TooltipModule,
    RouterLink,
    RouterLinkActive,
    MenuModule,
  ]
})
export class MenuItemComponent {
  private readonly overlay = inject(Overlay);

  @Input() menuItem?: MenuItem;

  overlayRef?: OverlayRef;

  menuOptionClick(event: Event) {
    if ( !this.menuItem?.children?.length || this.menuItem?.routerLink ) {
      return;
    }

    if ( event.target instanceof HTMLElement && event.target.tagName === 'I' ) {
      event = { ...event, target: event.target.parentElement };
    }

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(event.target as HTMLElement)
        .withPositions([{ originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', offsetX: -2, offsetY: 1 }])
        .withViewportMargin(10),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      width: 'min-content',
      maxHeight: '80vh',
    });

    const componentPortal = new ComponentPortal(MenuItemOverlayComponent);
    const componentRef = this.overlayRef.attach(componentPortal);

    componentRef.instance.options = this.menuItem?.children;

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });
  }
}

export interface MenuItem {
  label: string;
  icon: string;
  routerLink?: string;
  routerAction?: () => void;
  children?: MenuItem[];
}
