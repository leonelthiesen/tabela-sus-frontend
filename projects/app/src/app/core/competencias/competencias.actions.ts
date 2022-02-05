import { createAction, props } from '@ngrx/store';

import { Competencia } from './competencia.model';

const COMPETENCIAS_GET = '[Competencia] Get';
const COMPETENCIAS_GET_SUCCESS = '[Competencia] Get Success';
const COMPETENCIAS_GET_ERROR = '[Competencia] Get Error';
const COMPETENCIAS_SELECTED_ID_SET = '[Competencia] Selected Id Set';

export const competenciasGet = createAction(
    COMPETENCIAS_GET
);

export const competenciasGetSuccess = createAction(
    COMPETENCIAS_GET_SUCCESS,
    props<{ competencias: Competencia[] }>()
);

export const competenciasGetError = createAction(
    COMPETENCIAS_GET_ERROR,
    props<{ error: any }>()
);

export const competenciasSelectedIdSet = createAction(
    COMPETENCIAS_SELECTED_ID_SET,
    props<{ competenciaId: number }>()
);
