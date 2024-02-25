import { createSelector } from '@ngrx/store';

import { AppState } from '../../../core/core.state';
import { selectSigtapState, SigtapState } from '../sigtap.state';
import { Procedimento } from './procedimento.model';

export const selectProcedimentoState = createSelector(selectSigtapState, (state: SigtapState) => state.procedimento);
export const selectProcedimentos = createSelector(selectProcedimentoState, (state: ProcedimentoState) => state.procedimentos);
export const selectProcedimentosFiltered = createSelector(selectProcedimentoState,
    (state: ProcedimentoState) => state.procedimentosFiltered);
export const selectProcedimentosFilter = createSelector(selectProcedimentoState,
    (state: ProcedimentoState) => state.procedimentosFilter);
export const selectProcedimento = createSelector(selectProcedimentoState,
    (state: ProcedimentoState) => state.procedimento);

export interface ProcedimentoState {
    procedimentos: Procedimento[];
    procedimentosFiltered: Procedimento[];
    procedimentosFilter: string;
    procedimento: Procedimento;
}

export interface State extends AppState {
    procedimentos: ProcedimentoState;
}
