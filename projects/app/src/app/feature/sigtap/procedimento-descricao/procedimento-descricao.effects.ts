import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import * as procedimentoDescricaoActions from './procedimento-descricao.actions';
import { AppState } from '../../../core/core.state';
import { selectCompetenciaSelectedId } from '../../../core/competencias/competencias.state';
import { selectProcedimento } from '../procedimento/procedimento.state';
import { ProcedimentoDescricaoApi } from './procedimento-descricao.api';

@Injectable()
export class ProcedimentoDescricaoEffects {

    loadProcedimentoDescricao$ = createEffect(
        () => this.actions$.pipe(
            ofType(procedimentoDescricaoActions.procedimentoDescricaoGet),
            withLatestFrom(
                this.store.select(selectCompetenciaSelectedId),
                this.store.select(selectProcedimento)
            ),
            switchMap(([action, competenciaId, procedimento]) => {
                return this.procedimentoDescricaoApi.getByCompetenciaIdProcedimento(competenciaId, procedimento.id).pipe(
                    map(procedimentoDescricao => procedimentoDescricaoActions.procedimentoDescricaoGetSuccess({ procedimentoDescricao })),
                    catchError(error => of(procedimentoDescricaoActions.procedimentoDescricaoGetError({ error }))));
            })
        )
    );

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private procedimentoDescricaoApi: ProcedimentoDescricaoApi
    ) { }
}
