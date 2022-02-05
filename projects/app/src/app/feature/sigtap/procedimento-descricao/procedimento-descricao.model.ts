import { HttpErrorResponse } from '@angular/common/http';

export interface ProcedimentoDescricao {
    id: string;
    descricao: string;
}

export interface ProcedimentoDescricaoState {
    procedimentoDescricao?: ProcedimentoDescricao;
    loading: boolean;
    error?: HttpErrorResponse;
}
