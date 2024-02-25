import { createReducer, on } from '@ngrx/store';

import { ProcedimentoDescricaoState } from './procedimento-descricao.model';
import * as procedimentoDescricaoActions from './procedimento-descricao.actions';

export const initialState: ProcedimentoDescricaoState = {
    loading: false
};

export const procedimentoDescricaoReducer = createReducer(
    initialState,
    on(procedimentoDescricaoActions.procedimentoDescricaoGet, (state) => ({
        ...state,
        loading: true,
        error: undefined
    })),
    on(procedimentoDescricaoActions.procedimentoDescricaoGetSuccess, (state, { procedimentoDescricao }) => ({
        ...state,
        procedimentoDescricao,
        loading: false
    })),
    on(procedimentoDescricaoActions.procedimentoDescricaoGetError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);

