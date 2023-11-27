import { Injectable, inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingFullscreenComponent } from '@components/loading-fullscreen/loading-fullscreen.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly overlay = inject(Overlay);

  private showCount = 0;
  private overlayRef?: OverlayRef;

  show(loadingMessage?: string) {
    this.showCount++;
    if ( this.overlayRef ) {
      return;
    }

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'bg-primary',
    });

    const componentPortal = new ComponentPortal(LoadingFullscreenComponent);

    const componentRef = this.overlayRef.attach(componentPortal);
    componentRef.instance.message.set(loadingMessage);

    this.overlayRef.detachments().subscribe(
      () => this.overlayRef = undefined
    );
  }

  hide() {
    if ( !this.overlayRef ) {
      return;
    }

    this.showCount--;

    if ( this.showCount <= 0 ) {
      this.showCount = 0;
      this.overlayRef.detach();
      this.overlayRef = undefined;
    }
  }
}
