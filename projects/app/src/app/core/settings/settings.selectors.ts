import { createSelector } from '@ngrx/store';

import { SettingsState } from './settings.model';
import { selectSettingsState } from '../core.state';

export const selectSettings = createSelector(
    selectSettingsState,
    (state: SettingsState) => state
);

export const selectTheme = createSelector(
    selectSettings,
    (settings: SettingsState) => settings.theme
);

export const selectThemeClass = createSelector(
    selectTheme,
    (theme) => theme.toLowerCase()
);
