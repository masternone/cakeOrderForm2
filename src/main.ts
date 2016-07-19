import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';

import {AppRoutes} from './app/app.routs';
import {AppComponent, environment} from './app/';

if(environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(AppRoutes),
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);

