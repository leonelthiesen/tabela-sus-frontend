import { createAction, props } from '@ngrx/store';

const COMPETENCIAS_DELETE = '[Competencias] Delete';
const COMPETENCIAS_DELETE_SUCCESS = '[Competencias] Delete Success';
const COMPETENCIAS_DELETE_ERROR = '[Competencias] Delete Error';
const COMPETENCIAS_DELETE_NONEXISTENT = '[Competencias] Delete Nonexistent';
const COMPETENCIA_DELETE = '[Competencia] Delete';
const COMPETENCIA_DELETE_SUCCESS = '[Competencia] Delete Success';
const COMPETENCIA_DELETE_ERROR = '[Competencia] Delete Error';
const COMPETENCIA_DELETE_NONEXISTENT = '[Competencia] Delete Nonexistent';
const COMPETENCIA_IMPORT = '[Competencia] Import';
const COMPETENCIA_IMPORT_SUCCESS = '[Competencia] Import Success';
const COMPETENCIA_IMPORT_ERROR = '[Competencia] Import Error';

export const competenciasDelete = createAction(
    COMPETENCIAS_DELETE,
    props<{ anoMesCompetencias: string[] }>()
);

export const competenciasDeleteSuccess = createAction(
    COMPETENCIAS_DELETE_SUCCESS
);

export const competenciasDeleteError = createAction(
    COMPETENCIAS_DELETE_ERROR,
    props<{ error: any }>()
);

export const competenciasDeleteNonexistent = createAction(
    COMPETENCIAS_DELETE_NONEXISTENT
);

export const competenciaDelete = createAction(
    COMPETENCIA_DELETE,
    props<{ anoMesCompetencia: string }>()
);

export const competenciaDeleteSuccess = createAction(
    COMPETENCIA_DELETE_SUCCESS
);

export const competenciaDeleteError = createAction(
    COMPETENCIA_DELETE_ERROR,
    props<{ error: any }>()
);

export const competenciaDeleteNonexistent = createAction(
    COMPETENCIA_DELETE_NONEXISTENT
);

export const competenciaImport = createAction(
    COMPETENCIA_IMPORT,
    props<{ anoMesCompetencia: string }>()
);

export const competenciaImportSuccess = createAction(
    COMPETENCIA_IMPORT_SUCCESS
);

export const competenciaImportError = createAction(
    COMPETENCIA_IMPORT_ERROR,
    props<{ error: any }>()
);
