import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as importerActions from './importer.actions';

@Injectable({
    providedIn: 'root'
})
export class ImporterFacade {
    constructor(private store: Store) { }

    removeCompetenciasWhenExist(anoMesCompetencias: string[]) {
        this.store.dispatch(importerActions.competenciasDelete({ anoMesCompetencias }));
    }

    importCompetencia(anoMesCompetencia: string) {
        this.store.dispatch(importerActions.competenciaImport({ anoMesCompetencia }));
    }
}
