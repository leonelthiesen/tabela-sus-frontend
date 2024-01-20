import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as procedimentoDescricaoActions from './procedimento-descricao.actions';
import { ProcedimentoDescricaoState } from './procedimento-descricao.model';
import { selectProcedimentoDescricao, selectProcedimentoDescricaoLoading } from './procedimento-descricao.selectors';

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoDescricaoFacade {
    procedimentoDescricao$ = this.store.select(selectProcedimentoDescricao);
    loading$ = this.store.select(selectProcedimentoDescricaoLoading);

    constructor(private store: Store<ProcedimentoDescricaoState>) { }

    loadProcedimentoDescricao() {
        this.store.dispatch(procedimentoDescricaoActions.procedimentoDescricaoGet());
    }
}
