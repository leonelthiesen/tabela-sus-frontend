import {
    ActionReducerMap,
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

export const reducers: ActionReducerMap<AppState> = {
    // auth: authReducer,
    competencias: competenciasReducer,
    settings: settingsReducer,
    router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [
    initStateFromLocalStorage
];

// if (!environment.production) {
//     if (!environment.test) {
//         metaReducers.unshift(debug);
//     }
// }

// export const selectAuthState = createFeatureSelector<AppState, AuthState>(
//     'auth'
// );

// export const selectCompetenciasState = createFeatureSelector<AppState, CompetenciasState>('competencias');

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>('settings');

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>('router');

export interface AppState {
    // auth: AuthState;
    settings: SettingsState;
    competencias: CompetenciasState;
    router: RouterReducerState<RouterStateUrl>;
}
