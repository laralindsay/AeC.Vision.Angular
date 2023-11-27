import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(
    private matDialog: MatDialog
  ) {
  }

  open<T, D = any, R = any>(component: ComponentType<T>, config?: MatDialogConfigWithSizes<D>): MatDialogRef<T, R>;
  open<T, D = any, R = any>(template: TemplateRef<T>, config?: MatDialogConfigWithSizes<D>): MatDialogRef<T, R>;
  open<T, D = any, R = any>(template: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfigWithSizes<D>): MatDialogRef<T, R> {
    config = this.calculateModalSizeClass(config);

    return this.matDialog.open(template, config);
  }

  private calculateModalSizeClass<MData>(config?: MatDialogConfigWithSizes<MData>): MatDialogConfigWithSizes<MData> | undefined {
    if ( !config ) {
      return config;
    }
    const newConfig = { ...config };

    if ( !newConfig?.panelClass ) {
      newConfig.panelClass = [];
    }

    if ( !Array.isArray(newConfig?.panelClass) ) {
      newConfig.panelClass = [newConfig.panelClass];
    }


    const width = newConfig?.sizeX ?? newConfig?.size;
    const height = newConfig?.sizeY ?? newConfig?.size;

    if ( width ) {
      newConfig.maxWidth = undefined;
      newConfig.panelClass.push(`custom-modal-width-${width}`);
    }

    if ( height ) {
      newConfig.maxHeight = undefined;
      newConfig.panelClass.push(`custom-modal-height-${height}`);
    }

    return newConfig;
  }
}

export type ModalSizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export class ModalSizeConfig {
  size?: ModalSizeOptions = 'md';
  sizeX?: ModalSizeOptions = 'md';
  sizeY?: ModalSizeOptions = 'md';
}

export type MatDialogConfigWithSizes<MData = any> = ModalSizeConfig & MatDialogConfig<MData>;
