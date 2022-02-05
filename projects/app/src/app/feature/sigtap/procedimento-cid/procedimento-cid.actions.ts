import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { ProcedimentoCid } from './procedimento-cid.model';

const PROCEDIMENTO_CID_GET = '[ProcedimentoCid] Get';
const PROCEDIMENTO_CID_GET_SUCCESS = '[ProcedimentoCid] Get Success';
const PROCEDIMENTO_CID_GET_ERROR = '[ProcedimentoCid] Get Error';

export const procedimentoCidGet = createAction(
    PROCEDIMENTO_CID_GET
);

export const procedimentoCidGetSuccess = createAction(
    PROCEDIMENTO_CID_GET_SUCCESS,
    props<{ procedimentoCid: ProcedimentoCid[] }>()
);

export const procedimentoCidGetError = createAction(
    PROCEDIMENTO_CID_GET_ERROR,
    props<{ error: HttpErrorResponse }>()
);
