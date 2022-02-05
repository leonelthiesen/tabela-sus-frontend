import { createAction, props } from '@ngrx/store';

import { Procedimento } from './procedimento.model';

const PROCEDIMENTOS_GET = '[Procedimentos] Get';
const PROCEDIMENTOS_GET_SUCCESS = '[Procedimentos] Get Success';
const PROCEDIMENTOS_GET_ERROR = '[Procedimentos] Get Error';
const PROCEDIMENTOS_FILTER_SET = '[Procedimentos] Filter Set';
const PROCEDIMENTOS_PROCEDIMENTO_GET = '[Procedimentos] Procedimento Get';
const PROCEDIMENTOS_PROCEDIMENTO_GET_SUCCESS = '[Procedimentos] Procedimento Get Success';
const PROCEDIMENTOS_PROCEDIMENTO_GET_ERROR = '[Procedimentos] Procedimento Get Error';

export const procedimentosGet = createAction(
    PROCEDIMENTOS_GET
);

export const procedimentosGetSuccess = createAction(
    PROCEDIMENTOS_GET_SUCCESS,
    props<{ procedimentos: Procedimento[] }>()
);

export const procedimentosGetError = createAction(
    PROCEDIMENTOS_GET_ERROR,
    props<{ error: any }>()
);

export const procedimentosFilterSet = createAction(
    PROCEDIMENTOS_FILTER_SET,
    props<{ filter: string }>()
);

export const procedimentosProcedimentoGet = createAction(
    PROCEDIMENTOS_PROCEDIMENTO_GET
);

export const procedimentosProcedimentoGetSuccess = createAction(
    PROCEDIMENTOS_PROCEDIMENTO_GET_SUCCESS,
    props<{ procedimento: Procedimento }>()
);

export const procedimentosProcedimentoGetError = createAction(
    PROCEDIMENTOS_PROCEDIMENTO_GET_ERROR,
    props<{ error: any }>()
);
