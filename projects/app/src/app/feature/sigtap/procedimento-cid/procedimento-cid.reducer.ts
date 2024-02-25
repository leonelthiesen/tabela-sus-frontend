import { createReducer, on } from '@ngrx/store';

import { ProcedimentoCidState } from './procedimento-cid.model';
import * as procedimentoCidActions from './procedimento-cid.actions';

export const initialState: ProcedimentoCidState = {
    procedimentoCid: [],
    loading: false
};

export const procedimentoCidReducer = createReducer(
    initialState,
    on(procedimentoCidActions.procedimentoCidGet, (state) => ({
        ...state,
        loading: true,
        error: undefined
    })),
    on(procedimentoCidActions.procedimentoCidGetSuccess, (state, { procedimentoCid }) => ({
        ...state,
        procedimentoCid,
        loading: false
    })),
    on(procedimentoCidActions.procedimentoCidGetError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);

