import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';
import { ProcedimentoState } from './procedimento/procedimento.state';
import { ProcedimentoCidState } from './procedimento-cid/procedimento-cid.model';
import { procedimentoReducer } from './procedimento/procedimento.reducer';
import { procedimentoCidReducer } from './procedimento-cid/procedimento-cid.reducer';
import { ProcedimentoDescricaoState } from './procedimento-descricao/procedimento-descricao.model';
import { procedimentoDescricaoReducer } from './procedimento-descricao/procedimento-descricao.reducer';

export const FEATURE_NAME = 'sigtap';

export const selectSigtapState = createFeatureSelector<SigtapState>(FEATURE_NAME);

export const reducers: ActionReducerMap<SigtapState> = {
    procedimento: procedimentoReducer,
    procedimentoCid: procedimentoCidReducer,
    procedimentoDescricao: procedimentoDescricaoReducer
};

export interface SigtapState {
    procedimento: ProcedimentoState;
    procedimentoCid: ProcedimentoCidState;
    procedimentoDescricao: ProcedimentoDescricaoState;
}

export interface State extends AppState {
    sigtap: SigtapState;
}
