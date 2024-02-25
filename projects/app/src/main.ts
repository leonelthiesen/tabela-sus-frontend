import { enableProdMode, LOCALE_ID, importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { RouterStateSerializer, provideRouterStore } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faBars, faCog, faPaintBrush, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CustomSerializer } from './app/core/router/custom-serializer';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { CompetenciasEffects } from './app/core/competencias/competencias.effects';
import { SettingsEffects } from './app/core/settings/settings.effects';
import { RouterEffects } from './app/core/router/router.effects';
import { metaReducers, reducers } from './app/core/core.state';

registerLocaleData(ptBr, 'pt');

if (environment.production) {
    enableProdMode();
}

export function initializeApp(faIconLibrary: FaIconLibrary) {
    return (): void =>
        faIconLibrary.addIcons(
            faCog,
            faBars,
            faPaintBrush,
            faSearch
        );
  }


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserAnimationsModule,
            FontAwesomeModule
        ),
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            multi: true,
            deps: [FaIconLibrary],
        },
        provideHttpClient(),
        provideRouter(APP_ROUTES),
        provideRouterStore(),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: false,
            connectInZone: true
        }),
        provideStore(reducers, { metaReducers }),
        provideEffects([CompetenciasEffects, SettingsEffects, RouterEffects]),
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: RouterStateSerializer, useClass: CustomSerializer },
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'pt-br',
        }
    ]
})
    .catch(err => console.error(err));
