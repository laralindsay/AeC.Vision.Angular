import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from "primeng/selectbutton";
import { SelectItem } from "primeng/api";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { tap } from "rxjs";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { toSignal } from "@angular/core/rxjs-interop";
import { PageService } from "@services/page.service";

@Component({
  selector: 'app-gestao-analitico-select-buttons',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, RouterLink, RouterLinkActive],
  templateUrl: './gestao-analitico-select-buttons.component.html',
  styleUrls: ['./gestao-analitico-select-buttons.component.scss']
})
export class GestaoAnaliticoSelectButtonsComponent {
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  currentUser = toSignal(this.loggedUserService.user$);
  info = toSignal(this.pageService.getRouteInfoWithoutFilter(this.activatedRoute))


  routerLinkGestao = computed(() => {
    const adminOrMain = this.currentUser()?.admin ? 'admin' : 'main';
    const info = this.info();
    const perfil = this.info()?.perfil;
    const matricula = this.info()?.matricula;

    if ( !info || perfil == null || !matricula || matricula == Number(this.currentUser()?.matricula) ) {
      return `/${adminOrMain}/gestao/`;
    }

    return `/${adminOrMain}/gestao/${ProfileEnum[perfil].toLocaleLowerCase()}/${matricula}`;
  });

  routerLinkAnalitico = computed(() => {
    const adminOrMain = this.currentUser()?.admin ? 'admin' : 'main';
    const info = this.info();
    const perfil = this.info()?.perfil;
    const matricula = this.info()?.matricula;

    if ( !info || perfil == null || !matricula || matricula == Number(this.currentUser()?.matricula) ) {
      return `/${adminOrMain}/analitico/`;
    }

    return `/${adminOrMain}/analitico/${ProfileEnum[perfil].toLocaleLowerCase()}/${matricula}`;
  });
}
