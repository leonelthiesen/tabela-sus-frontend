import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { ProcedimentoDescricao } from './procedimento-descricao.model';

export enum ProcedimentoDescricaoActionTypes {
    ProcedimentoDescricaoGet = '[ProcedimentoDescricao] Get',
    ProcedimentoDescricaoGetSuccess = '[ProcedimentoDescricao] Get Success',
    ProcedimentoDescricaoGetError = '[ProcedimentoDescricao] Get Error',
}

export const procedimentoDescricaoGet = createAction(
    ProcedimentoDescricaoActionTypes.ProcedimentoDescricaoGet
);

export const procedimentoDescricaoGetSuccess = createAction(
    ProcedimentoDescricaoActionTypes.ProcedimentoDescricaoGetSuccess,
    props<{ procedimentoDescricao: ProcedimentoDescricao }>()
);

export const procedimentoDescricaoGetError = createAction(
    ProcedimentoDescricaoActionTypes.ProcedimentoDescricaoGetError,
    props<{ error: HttpErrorResponse }>()
);
