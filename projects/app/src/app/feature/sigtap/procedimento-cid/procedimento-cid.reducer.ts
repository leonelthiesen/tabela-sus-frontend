import { createReducer, on, Action } from '@ngrx/store';

import { ProcedimentoCidState } from './procedimento-cid.model';
import * as procedimentoCidActions from './procedimento-cid.actions';

export const initialState: ProcedimentoCidState = {
    procedimentoCid: [],
    loading: false
};

const reducer = createReducer(
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

export function procedimentoCidReducer(state: ProcedimentoCidState | undefined, action: Action) {
    return reducer(state, action);
}
