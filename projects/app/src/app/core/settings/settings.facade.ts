import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../core.state';
import { actionSettingsChangeTheme } from './settings.actions';
import { selectSettings, selectTheme, selectThemeClass } from './settings.selectors';

@Injectable({
    providedIn: 'root'
})
export class SettingsFacade {
    theme$ = this.store.select(selectTheme);
    themeClass$ = this.store.select(selectThemeClass);
    settings$ = this.store.select(selectSettings);

    constructor(private store: Store<AppState>) { }

    changeTheme(theme: string) {
        this.store.dispatch(actionSettingsChangeTheme({ theme }));
    }
}
