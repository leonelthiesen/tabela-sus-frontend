import { createReducer, on, Action } from '@ngrx/store';

import { CompetenciasState } from './competencias.state';
import * as competenciasAction from './competencias.actions';

// export const initialState: CompetenciasState = {
//     competencias: [],
//     competenciaLast: undefined,
//     competenciaSelectedId: undefined
// };

const reducer = createReducer(
    {} as CompetenciasState,
    on(competenciasAction.competenciasGetSuccess, (state, payload) => ({
        ...state,
        competencias: payload.competencias
    })),
    on(competenciasAction.competenciasSelectedIdSet, (state, payload) => ({
        ...state,
        competenciaSelectedId: payload.competenciaId
    }))
);

export function competenciasReducer(state: CompetenciasState | undefined, action: Action) {
    return reducer(state, action);
}
