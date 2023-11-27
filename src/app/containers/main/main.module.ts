import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MenuComponent } from '@app/layout/menu/menu.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, MenuComponent],
})
export class MainModule {}
