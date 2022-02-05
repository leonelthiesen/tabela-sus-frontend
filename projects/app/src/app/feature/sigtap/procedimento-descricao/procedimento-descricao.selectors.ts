import { createSelector } from '@ngrx/store';

import { selectSigtapState, SigtapState } from '../sigtap.state';
import { ProcedimentoDescricaoState } from './procedimento-descricao.model';

export const selectProcedimentoDescricaoState = createSelector(selectSigtapState, (state: SigtapState) => state.procedimentoDescricao);
export const selectProcedimentoDescricao = createSelector(
    selectProcedimentoDescricaoState, (state: ProcedimentoDescricaoState) => state.procedimentoDescricao);
export const selectProcedimentoDescricaoLoading = createSelector(
    selectProcedimentoDescricaoState, (state: ProcedimentoDescricaoState) => state.loading);
