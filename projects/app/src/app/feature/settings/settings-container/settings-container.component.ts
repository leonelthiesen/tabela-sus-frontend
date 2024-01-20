import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SettingsFacade } from '../../../core/settings/settings.facade';
import { AsyncPipe } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'ts-settings-container',
    templateUrl: './settings-container.component.html',
    styleUrls: ['./settings-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIconModule, FaIconComponent, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule, MatOptionModule, AsyncPipe]
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
