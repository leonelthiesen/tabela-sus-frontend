import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as procedimentosActions from './procedimento.actions';
import { ProcedimentoState, selectProcedimentos, selectProcedimentosFilter, selectProcedimento } from './procedimento.state';

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoFacade {
    procedimentos$ = this.store.select(selectProcedimentos);
    procedimentosFilter$ = this.store.select(selectProcedimentosFilter);
    procedimento$ = this.store.select(selectProcedimento);

    constructor(private store: Store<ProcedimentoState>) { }

    setFilter(filter: string) {
        this.store.dispatch(procedimentosActions.procedimentosFilterSet({ filter }));
    }

    loadProcedimento() {
        this.store.dispatch(procedimentosActions.procedimentosProcedimentoGet());
    }
}
