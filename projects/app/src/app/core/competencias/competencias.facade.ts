import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as competenciasActions from './competencias.actions';
import { CompetenciasState, selectCompetencias, selectCompetenciaSelectedId } from './competencias.state';

@Injectable()
export class CompetenciasFacade {
    competencias$ = this.store.select(selectCompetencias);
    competenciaSelectedId$ = this.store.select(selectCompetenciaSelectedId);

    constructor(private store: Store<CompetenciasState>) { }

    loadCompetencias() {
        this.store.dispatch(competenciasActions.competenciasGet());
    }

    setCompetenciaIdSelected(competenciaId: number) {
        this.store.dispatch(competenciasActions.competenciasSelectedIdSet({ competenciaId }));
    }
}
