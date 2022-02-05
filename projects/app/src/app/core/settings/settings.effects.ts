import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import {
    tap,
    withLatestFrom
} from 'rxjs/operators';

import { selectSettingsState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';

import { actionSettingsChangeTheme } from './settings.actions';
import { State } from './settings.model';
import { selectThemeClass } from './settings.selectors';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('ts-init-effect-trigger');

@Injectable()
export class SettingsEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private overlayContainer: OverlayContainer,
        private localStorageService: LocalStorageService
    ) { }

    persistSettings = createEffect(
        () =>
            this.actions$.pipe(
                ofType(actionSettingsChangeTheme),
                withLatestFrom(this.store.pipe(select(selectSettingsState))),
                tap(([action, settings]) =>
                    this.localStorageService.setItem(SETTINGS_KEY, settings)
                )
            ),
        { dispatch: false }
    );

    updateTheme = createEffect(
        () =>
            merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
                withLatestFrom(this.store.pipe(select(selectThemeClass))),
                tap(([action, themeClass]) => {
                    const classList = this.overlayContainer.getContainerElement()
                        .classList;
                    const toRemove = Array.from(classList).filter((item: string) =>
                        item.includes('-theme')
                    );
                    if (toRemove.length) {
                        classList.remove(...toRemove);
                    }
                    classList.add(themeClass);
                })
            ),
        { dispatch: false }
    );
}
