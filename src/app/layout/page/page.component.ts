import { AfterContentInit, Component, ContentChildren, Directive, inject, Input, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from '@services/auth.service';
import { LoggedUserService } from "@services/logged-user.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { PageService } from "@services/page.service";
import { PageFiltersComponent } from "@layout/page/page-filters/page-filters.component";

@Directive({
  selector: '[appPageTemplate]',
  standalone: true,
})
export class PageTemplateDirective {
  template = inject(TemplateRef);
  @Input() appPageTemplate?: 'header' | 'subheader' | 'content';
}

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AvatarModule, ButtonModule, PageFiltersComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterContentInit {

  private readonly confirmationService = inject(ConfirmationService);
  private readonly authService = inject(AuthService);
  private readonly loggedUserService = inject(LoggedUserService);

  private readonly pageService = inject(PageService);

  @ContentChildren(PageTemplateDirective) templates?: QueryList<PageTemplateDirective>;
  headerTemplate?: TemplateRef<any>;
  subHeaderTemplate?: TemplateRef<any>;
  contentTemplate?: TemplateRef<any>;

  user$ = this.loggedUserService.user$;
  user = toSignal(this.user$);

  @Input() hasFilters = false;
  @Input() hasMatriculaFilter = true;
  @Input() hasOperacaoFilter = true;
  @Input() hasSegmentoFilter = true;
  @Input() hasDateFilter = true;

  ngAfterContentInit() {
    this.templates?.forEach(template => {
      switch (template?.appPageTemplate) {
        case 'header':
          this.headerTemplate = template.template;
          break;

        case 'subheader':
          this.subHeaderTemplate = template.template;
          break;

        case 'content':
          this.contentTemplate = template.template;
          break;
      }
    });
  }

  logout() {
    this.confirmationService.confirm({
      header: 'Sair do sistema',
      message: 'Tem certeza que deseja sair do sistema?',
      key: 'dialog',

      acceptIcon: 'none',
      acceptLabel: 'Sim, sair',
      accept: () => {
        this.authService.logout();
      },

      rejectIcon: 'none',
      rejectLabel: 'Não, cancelar',
      rejectButtonStyleClass: 'p-button-outlined',
    });
  }
}
