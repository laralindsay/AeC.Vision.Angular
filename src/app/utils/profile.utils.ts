import { ProfileEnum } from "@services/logged-user.service";

export const getProfileEnumById = (idPerfil?: number | null) => {
  switch (idPerfil) {
    case 1: return ProfileEnum.Supervisor;
    case 2: return ProfileEnum.Coordenador;
    case 3: return ProfileEnum.Gerente;
    case 4: return ProfileEnum.GerenteExecutivo;
    case 5: return ProfileEnum.Diretor;
    case 6: return ProfileEnum.Administrador;
    default: return ProfileEnum.Operador;
  }
}

export const getProfileNameByEnum = (idPerfil: ProfileEnum) => {
  switch (idPerfil) {
    case ProfileEnum.Diretor: return 'diretor';
    case ProfileEnum.GerenteExecutivo: return 'gerente-executivo';
    case ProfileEnum.Gerente: return 'gerente';
    case ProfileEnum.Coordenador: return 'coordenador';
    case ProfileEnum.Supervisor: return 'supervisor';
    case ProfileEnum.Operador: return 'operador';
    default: return null;
  }
}

export const getRouteIdParameterName = (idPerfil: ProfileEnum) => {
  switch(idPerfil) {
    case ProfileEnum.Administrador: return 'administradorId';
    case ProfileEnum.Diretor: return 'diretorId';
    case ProfileEnum.GerenteExecutivo: return 'gerenteExecutivoId';
    case ProfileEnum.Gerente: return 'gerenteId';
    case ProfileEnum.Coordenador: return 'coordenadorId';
    case ProfileEnum.Supervisor: return 'supervisorId';
    case ProfileEnum.Operador: return 'operadorId';
    default: return '';
  }
}
