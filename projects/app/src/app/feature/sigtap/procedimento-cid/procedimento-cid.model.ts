import { HttpErrorResponse } from '@angular/common/http';

import { Procedimento } from '../procedimento/procedimento.model';

// TODO: Estudar para onde devo mover esta interface
interface Cid {
    id: string;
    codigo: string;
    nome: string;
}

export interface ProcedimentoCid {
    id: string;
    codigo: string;
    podeSerPrincipal: boolean;
    procedimento: Procedimento;
    cid: Cid;
}

export interface ProcedimentoCidState {
    procedimentoCid: ProcedimentoCid[];
    loading: boolean;
    error?: HttpErrorResponse;
}
