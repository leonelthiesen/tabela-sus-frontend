import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { SigtapModule } from './feature/sigtap/sigtap.module';

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
        providers: [
            importProvidersFrom(
                SigtapModule    
            )
        ]
    },
    {
        path: 'sigtap',
        loadChildren: () => import('./feature/sigtap/sigtap.routes').then(m => m.SIGTAP_ROUTES)
    },
    {
        path: 'settings',
        loadChildren: () => import('./feature/settings/settings.routes').then(m => m.SETTINGS_ROUTES)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
