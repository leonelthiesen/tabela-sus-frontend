import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../core.module';
import { Competencia } from './competencia.model';

export const FEATURE_NAME = 'competencias';

export const selectCompetenciasState = createFeatureSelector<CompetenciasState>(FEATURE_NAME);
export const selectCompetencias = createSelector(selectCompetenciasState, (state: CompetenciasState) => state.competencias);
export const selectCompetenciaSelectedId = createSelector(selectCompetenciasState,
    (state: CompetenciasState) => state.competenciaSelectedId);

export interface CompetenciasState {
    competencias: Competencia[];
    competenciaLast: Competencia;
    competenciaSelectedId: number;
}

export interface State extends AppState {
    competencias: CompetenciasState;
}
