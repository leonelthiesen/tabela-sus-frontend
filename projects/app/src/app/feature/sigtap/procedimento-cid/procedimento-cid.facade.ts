import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as procedimentoCidActions from './procedimento-cid.actions';
import { selectProcedimentoCid, selectProcedimentoCidLoading } from './procedimento-cid.selectors';
import { ProcedimentoCidState } from './procedimento-cid.model';

@Injectable()
export class ProcedimentoCidFacade {
    procedimentoCid$ = this.store.select(selectProcedimentoCid);
    loading$ = this.store.select(selectProcedimentoCidLoading);

    constructor(private store: Store<ProcedimentoCidState>) { }

    loadProcedimentoCid() {
        this.store.dispatch(procedimentoCidActions.procedimentoCidGet());
    }
}
