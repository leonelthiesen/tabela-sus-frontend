import { Routes } from '@angular/router';
import { SettingsContainerComponent } from './settings-container/settings-container.component';

export const SETTINGS_ROUTES: Routes = [
    { path: '', component: SettingsContainerComponent, data: { title: 'Configurações' } },
];
