import {
    createFeatureSelector,
    MetaReducer
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { RouterStateUrl } from './router/router.state';
import { competenciasReducer } from './competencias/competencias.reducer';
import { CompetenciasState } from './competencias/competencias.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';


export const metaReducers: Array<MetaReducer> = [
    initStateFromLocalStorage
];

export const reducers = {
    'competencias': competenciasReducer,
    'settings': settingsReducer,
    'router': routerReducer
};

export const selectSettingsState = createFeatureSelector<SettingsState>('settings');

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export interface AppState {
    settings: SettingsState;
    competencias: CompetenciasState;
    router: RouterReducerState<RouterStateUrl>;
}
