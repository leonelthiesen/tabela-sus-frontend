import { SettingsState } from './settings.model';
import { actionSettingsChangeTheme } from './settings.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: SettingsState = {
    theme: 'BLACK-THEME',
};

export const settingsReducer = createReducer(
    initialState,
    on(actionSettingsChangeTheme,
        (state, action) => ({ ...state, ...action })
    )
);

