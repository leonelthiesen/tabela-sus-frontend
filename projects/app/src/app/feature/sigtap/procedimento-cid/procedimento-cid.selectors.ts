import { createSelector } from '@ngrx/store';

import { selectSigtapState, SigtapState } from '../sigtap.state';
import { ProcedimentoCidState } from './procedimento-cid.model';

export const selectProcedimentoCidState = createSelector(selectSigtapState, (state: SigtapState) => state.procedimentoCid);
export const selectProcedimentoCid = createSelector(selectProcedimentoCidState, (state: ProcedimentoCidState) => state.procedimentoCid);
export const selectProcedimentoCidLoading = createSelector(selectProcedimentoCidState, (state: ProcedimentoCidState) => state.loading);
