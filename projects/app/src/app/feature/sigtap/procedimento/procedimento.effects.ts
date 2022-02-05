import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState, selectRouterState } from '../../../core/core.state';
import * as procedimentosActions from './procedimento.actions';
import { ProcedimentoApi } from './procedimento.api';
import { selectProcedimentosFilter } from './procedimento.state';
import { selectCompetenciaSelectedId } from '../../../core/competencias/competencias.state';

@Injectable()
export class ProcedimentoEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private procedimentoApi: ProcedimentoApi
    ) { }

    procedimentosGet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(procedimentosActions.procedimentosFilterSet),
            concatMap(action => of(action).pipe(
                withLatestFrom(
                    this.store.select(selectCompetenciaSelectedId),
                    this.store.select(selectProcedimentosFilter)
                ),
            )),
            switchMap(([action, competenciaId, procedimentosFilter]) =>
                this.procedimentoApi.getByCompetenciaIdNome(competenciaId, procedimentosFilter).pipe(
                    map(procedimentos => procedimentosActions.procedimentosGetSuccess({ procedimentos })),
                    catchError(error => of(procedimentosActions.procedimentosGetError({ error })))
                )
            )
        )
    );

    procedimentoGet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(procedimentosActions.procedimentosProcedimentoGet),
            concatMap(action => of(action).pipe(
                withLatestFrom(
                    this.store.select(selectCompetenciaSelectedId),
                    this.store.select(selectRouterState)
                ),
            )),
            switchMap(([action, competenciaId, routerParams]) =>
                this.procedimentoApi.getByCompetenciaIdProcedimentoCodigo(competenciaId, routerParams.state.params.codigoProcedimento)
                    .pipe(
                        map(procedimento => procedimentosActions.procedimentosProcedimentoGetSuccess({ procedimento })),
                        catchError(error => of(procedimentosActions.procedimentosProcedimentoGetError({ error })))
                    )
            )
        )
    );
}
