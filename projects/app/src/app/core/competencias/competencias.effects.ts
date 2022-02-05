import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { withLatestFrom, tap, switchMap, map, catchError, concatAll, first, concatMap, mergeMap, filter } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';

import { AppState } from '../core.module';
import * as competenciasActions from './competencias.actions';
import { selectCompetencias, selectCompetenciaSelectedId } from './competencias.state';
import { CompetenciasApi } from './competencias.api';

@Injectable()
export class CompetenciasEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private competenciasApi: CompetenciasApi
    ) { }

    competenciasGet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(competenciasActions.competenciasGet),
            concatMap(() =>
                this.competenciasApi.getCompetencias().pipe(
                    map(competencias => competencias.map((competencia) => {
                        competencia.mesAnoDisplay = `${competencia.anoMesCompetencia.slice(4, 6)}/${competencia.anoMesCompetencia.slice(0, 4)}`;
                        return competencia;
                    })),
                    mergeMap(competencias => [
                        competenciasActions.competenciasGetSuccess({ competencias })
                        // competenciasActions.competenciasSelectedIdSet({ competenciaId: competencias[0].id })
                    ]),
                    catchError(error => of(competenciasActions.competenciasGetError({ error })))
                )
            )
        ),
        // { dispatch: false }
    );

    competenciasGetSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(competenciasActions.competenciasGetSuccess),
            concatMap(action => of(action).pipe(
                    withLatestFrom(
                        this.store.select(selectCompetencias),
                        this.store.select(selectCompetenciaSelectedId)
                    ),
                )
            ),
            // intenção de somente gravar a competência selecionada caso não haja nenhuma
            filter(([action, competencias, competenciaSelectedId]) => !competenciaSelectedId),
            map(([action, competencias]) => competenciasActions.competenciasSelectedIdSet({ competenciaId: competencias[0].id }))
        )
        // { dispatch: false }
    );

    // effectName$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(competenciasSet),
    //         map(() => ),
    //         // withLatestFrom(this.store.pipe(select(selectCompetencias))),
    //         // map((competencias) => competenciasLastSet({ competenciaLast: competencias[0] }))
    //     )
    // );

    // setLast = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             ofType(competenciasSet),
    //             withLatestFrom(this.store.pipe(select(selectCompetencias))),
    //             // switchMap((actions, competencias) => [competenciasLastSet({ competenciaLast: competencias[0]})]),
    //             tap(([actions, competencias]) => [competenciasLastSet({ competenciaLast: competencias[0]})])
    //         ),
    //     { dispatch: true }
    // );
}
