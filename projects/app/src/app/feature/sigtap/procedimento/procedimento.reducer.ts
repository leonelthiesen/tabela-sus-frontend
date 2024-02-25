import { createReducer, on } from '@ngrx/store';

import { ProcedimentoState } from './procedimento.state';
import * as procedimentoActions from './procedimento.actions';

export const procedimentoReducer = createReducer(
    {} as ProcedimentoState, // TODO: ver se é a melhor forma de iniciar o estado
    on(procedimentoActions.procedimentosGetSuccess, (state, payload) => ({
        ...state,
        procedimentos: payload.procedimentos
    })),
    on(procedimentoActions.procedimentosFilterSet, (state, payload) => ({
        ...state,
        procedimentosFilter: payload.filter
    })),
    on(procedimentoActions.procedimentosProcedimentoGetSuccess, (state, payload) => ({
        ...state,
        procedimento: payload.procedimento
    })),
);
