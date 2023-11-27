/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vision360ApiConfiguration, Vision360ApiConfigurationParams } from './vision-360-api-configuration';

import { HttpAcessoService } from './services/http-acesso.service';
import { HttpAdministradorService } from './services/http-administrador.service';
import { HttpAlertaService } from './services/http-alerta.service';
import { HttpChamadaService } from './services/http-chamada.service';
import { HttpClienteService } from './services/http-cliente.service';
import { HttpCoordenadorService } from './services/http-coordenador.service';
import { HttpDashboardService } from './services/http-dashboard.service';
import { HttpDiretorService } from './services/http-diretor.service';
import { HttpEventoService } from './services/http-evento.service';
import { HttpFuncionalidadeService } from './services/http-funcionalidade.service';
import { HttpGerenteService } from './services/http-gerente.service';
import { HttpGerenteExecutivoService } from './services/http-gerente-executivo.service';
import { HttpOperadorService } from './services/http-operador.service';
import { HttpParametrizacaoService } from './services/http-parametrizacao.service';
import { HttpPerfilService } from './services/http-perfil.service';
import { HttpProjetoService } from './services/http-projeto.service';
import { HttpSistemaService } from './services/http-sistema.service';
import { HttpSupervisorService } from './services/http-supervisor.service';
import { HttpTokenService } from './services/http-token.service';
import { HttpUsuarioService } from './services/http-usuario.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    HttpAcessoService,
    HttpAdministradorService,
    HttpAlertaService,
    HttpChamadaService,
    HttpClienteService,
    HttpCoordenadorService,
    HttpDashboardService,
    HttpDiretorService,
    HttpEventoService,
    HttpFuncionalidadeService,
    HttpGerenteService,
    HttpGerenteExecutivoService,
    HttpOperadorService,
    HttpParametrizacaoService,
    HttpPerfilService,
    HttpProjetoService,
    HttpSistemaService,
    HttpSupervisorService,
    HttpTokenService,
    HttpUsuarioService,
    Vision360ApiConfiguration
  ],
})
export class Vision360ApiModule {
  static forRoot(params: Vision360ApiConfigurationParams): ModuleWithProviders<Vision360ApiModule> {
    return {
      ngModule: Vision360ApiModule,
      providers: [
        {
          provide: Vision360ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: Vision360ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('Vision360ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
