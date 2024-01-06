import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
    faCog,
    faBars,
    faPaintBrush,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CompetenciasFacade } from './competencias/competencias.facade';
import { CompetenciasApi } from './competencias/competencias.api';
import { AppState, reducers, metaReducers } from './core.state';
import { CompetenciasEffects } from './competencias/competencias.effects';
import { CustomSerializer } from './router/custom-serializer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { SettingsFacade } from './settings/settings.facade';
import { SettingsEffects } from './settings/settings.effects';
import { RouterEffects } from './router/router.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatDateFnsDateModule } from 'ngx-mat-datefns-date-adapter';

export {
    AppState,
    LocalStorageService
};

@NgModule({
    declarations: [MainLayoutComponent],
    imports: [
        // angular
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,

        // material
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([
            CompetenciasEffects,
            SettingsEffects,
            RouterEffects
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: false // Restrict extension to log-only mode
        }),

        // 3rd party
        FontAwesomeModule,
        NgxMatDateFnsDateModule
    ],
    exports: [
        MainLayoutComponent,
        FontAwesomeModule
    ],
    providers: [
        CompetenciasApi,
        CompetenciasFacade,
        SettingsFacade,
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'pt-br',
        }
    ],
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule,
        faIconLibrary: FaIconLibrary
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
        faIconLibrary.addIcons(
            faCog,
            faBars,
            faPaintBrush,
            faSearch
        );
    }
}
