import { DEFAULT_CURRENCY_CODE, inject, LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { PrimeNGConfig } from 'primeng/api';
import { provideInitEffect } from '@app/utils/config.utils';

registerLocaleData(ptBr)

@NgModule({
  imports: [],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideInitEffect(() => inject(PrimeNGConfig).setTranslation({
      'startsWith': 'Começa com',
      'contains': 'Contém',
      'notContains': 'Não contém',
      'endsWith': 'Termina com',
      'equals': 'Equal',
      'notEquals': 'Diferente',
      'noFilter': 'Sem filtro',
      'lt': 'Menor que',
      'lte': 'Menor que ou igual a',
      'gt': 'Maior que',
      'gte': 'Maior que ou igual a',
      'is': 'é',
      'isNot': 'não é',
      'before': 'Antes',
      'after': 'Depois',
      'dateIs': 'Data é',
      'dateIsNot': 'Não é data',
      'dateBefore': 'Data é antes',
      'dateAfter': 'Data é depois',
      'clear': 'Limpar',
      'apply': 'Aplicar',
      'matchAll': 'Match All',
      'matchAny': 'Match Any',
      'addRule': 'Adicionar Regra',
      'removeRule': 'Remover regra',
      'accept': 'Sim',
      'reject': 'Não',
      'choose': 'Escolha',
      'upload': 'Upload',
      'cancel': 'Cancelar',
      'dayNames': ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      'dayNamesShort': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      'dayNamesMin': ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      'monthNames': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      'monthNamesShort': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      'dateFormat': 'dd/mm/yy',
      'firstDayOfWeek': 0,
      'today': 'Hoje',
      'weekHeader': 'Sem',
      'weak': 'Fraca',
      'medium': 'Média',
      'strong': 'Forte',
      'passwordPrompt': 'Digite a senha',
      'emptyMessage': 'Nenhum resultado encontrado',
      'emptyFilterMessage': 'Nenhum resultado encontrado'
    }))
  ],
})
export class LanguageConfigModule {
}
