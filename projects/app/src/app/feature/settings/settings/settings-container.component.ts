import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SettingsFacade } from '../../../core/settings/settings.facade';

@Component({
    selector: 'ts-settings',
    templateUrl: './settings-container.component.html',
    styleUrls: ['./settings-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent {
    settings$ = this.settingsFacade.settings$;

    themes = [
        { value: 'DEFAULT-THEME', label: 'Padrão' },
        { value: 'BLACK-THEME', label: 'Dark' }
    ];

    constructor(private settingsFacade: SettingsFacade) { }

    onThemeSelect(theme: string ) {
        this.settingsFacade.changeTheme(theme);
    }
}
