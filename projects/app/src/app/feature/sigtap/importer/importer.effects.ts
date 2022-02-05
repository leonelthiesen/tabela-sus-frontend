import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, map, catchError, concatMap, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState, selectRouterState } from '../../../core/core.state';
import { selectCompetenciaSelectedId } from '../../../core/competencias/competencias.state';
import { ImporterApi } from './importer.api';
import * as importerActions from './importer.actions';
import * as competenciasActions from '../../../core/competencias/competencias.actions';

@Injectable()
export class ImporterEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private importerApi: ImporterApi
    ) { }

    competenciasDelete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(importerActions.competenciasDelete),
            concatMap((payload) =>
                this.importerApi.removeCompetenciasWhenExist(payload.anoMesCompetencias).pipe(
                    map(() => {
                        console.log('after remove');
                        return importerActions.competenciasDeleteSuccess();
                    }),
                    catchError(error => of(importerActions.competenciasDeleteError({ error })))
                )
            )
        )
    );

    competenciasDeleteSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(importerActions.competenciasDeleteSuccess),
            map(() => competenciasActions.competenciasGet()),
        )
    );

    competenciaImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(importerActions.competenciaImport),
            concatMap((payload) =>
                this.importerApi.importCompetencia(payload.anoMesCompetencia).pipe(
                    map(() => {
                        return importerActions.competenciaImportSuccess();
                    }),
                    catchError(error => of(importerActions.competenciaImportError({ error })))
                )
            )
        )
    );

    competenciaImportSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(importerActions.competenciaImportSuccess),
            map(() => competenciasActions.competenciasGet()),
        )
    );
}
