import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { settingsReducer } from './core/settings/settings.reducer';
import { SettingsEffects } from './core/settings/settings.effects';
import { sigtapReducers } from './feature/sigtap/sigtap.state';
import { ProcedimentoEffects } from './feature/sigtap/procedimento/procedimento.effects';
import { ProcedimentoCidEffects } from './feature/sigtap/procedimento-cid/procedimento-cid.effects';
import { ProcedimentoDescricaoEffects } from './feature/sigtap/procedimento-descricao/procedimento-descricao.effects';
import { ImporterEffects } from './feature/sigtap/importer/importer.effects';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./feature/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import('./feature/admin/admin.routes').then(m => m.ADMIN_ROUTES),
    },
    {
        path: 'sigtap',
        loadChildren: () => import('./feature/sigtap/sigtap.routes').then(m => m.SIGTAP_ROUTES),
        providers: [
            provideState("sigtap", sigtapReducers),
            provideEffects([
                ProcedimentoEffects,
                ProcedimentoCidEffects,
                ProcedimentoDescricaoEffects,
                ImporterEffects,                
            ]),
        ],
    },
    {
        path: 'settings',
        loadChildren: () => import('./feature/settings/settings.routes').then(m => m.SETTINGS_ROUTES),
        providers: [
            provideState("settings", settingsReducer),
            provideEffects([SettingsEffects]),
        ],
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
