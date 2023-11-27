import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTemplateDirective } from '@layout/page/page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-administradores',
  standalone: true,
  imports: [CommonModule, PageComponent, PageTemplateDirective, RouterOutlet],
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.scss']
})
export class AdministradoresComponent {

}
