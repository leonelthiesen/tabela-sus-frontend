import { AppState } from '../core.state';

export interface SettingsState {
    theme: string;
}

export interface State extends AppState {
    settings: SettingsState;
}
