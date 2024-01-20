import { enableProdMode, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './app/core/core.module';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

registerLocaleData(ptBr, 'pt');

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(CoreModule, FontAwesomeModule),
        provideRouter(APP_ROUTES),
        { provide: LOCALE_ID, useValue: 'pt' }
    ]
})
  .catch(err => console.error(err));
