import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AppState } from '../../../core/core.module';
import { ProcedimentoCidApi } from './procedimento-cid.api';
import * as procedimentoCidActions from './procedimento-cid.actions';
import { selectCompetenciaSelectedId } from '../../../core/competencias/competencias.state';
import { selectProcedimento } from '../procedimento/procedimento.state';

@Injectable()
export class ProcedimentoCidEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private procedimentoCidApi: ProcedimentoCidApi
    ) { }

    procedimentoCidGet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(procedimentoCidActions.procedimentoCidGet),
            concatMap(action => of(action).pipe(
                withLatestFrom(
                    this.store.select(selectCompetenciaSelectedId),
                    this.store.select(selectProcedimento)
                ),
            )),
            switchMap(([action, competenciaId, procedimento]) =>
                this.procedimentoCidApi.getByCompetenciaIdProcedimento(competenciaId, procedimento.id).pipe(
                    map(procedimentoCid => procedimentoCidActions.procedimentoCidGetSuccess({ procedimentoCid })),
                    catchError(error => of(procedimentoCidActions.procedimentoCidGetError({ error })))
                )
            )
        )
    );
}
