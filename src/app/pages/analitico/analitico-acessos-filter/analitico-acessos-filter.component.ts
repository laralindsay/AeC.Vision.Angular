import { Component, inject, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AnaliticoAcessosComponent } from "@pages/analitico/analitico-acessos/analitico-acessos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DatasourcePDropdownDirective } from "@app/directives/datasource-p-dropdown.directive";
import { DropdownModule } from "primeng/dropdown";
import { HttpAcessoService } from "@api-vision360/services/http-acesso.service";

@Component({
  standalone: true,
  selector: 'app-analitico-acessos-filter',
  templateUrl: './analitico-acessos-filter.component.html',
  styleUrls: ['./analitico-acessos-filter.component.scss'],
  imports: [CommonModule, FormsModule, InputTextModule, ReactiveFormsModule, DatasourcePDropdownDirective, DropdownModule],
})
export class AnaliticoAcessosFilterComponent {

  private readonly httpAcessoService = inject(HttpAcessoService);

  @Input({ required: true }) filterForm!: AnaliticoAcessosComponent['filterForm'];

  aderenciaAcesso$ = this.httpAcessoService.apiAcessoAderenciaAcessoGet$Json();
  tipoAcesso$ = this.httpAcessoService.apiAcessoTipoAcessoGet$Json();
}
