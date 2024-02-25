import { createReducer, on } from '@ngrx/store';

import { CompetenciasState } from './competencias.state';
import * as competenciasAction from './competencias.actions';

export const competenciasReducer = createReducer(
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
