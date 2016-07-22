import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideRouter} from '@angular/router';
import {CanActivateViaAuthGuard} from './app/app.CanActivateViaAuthGuard'
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig} from 'angularfire2';

import {AppRoutes} from './app/app.routes';
import {AppComponent, environment} from './app/';

if(environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(
  {
    apiKey: "AIzaSyClMUeCVSKC1F50BHIH9gjWyoBn1rrpc9o",
    authDomain: "cakeorderform2.firebaseapp.com",
    databaseURL: "https://cakeorderform2.firebaseio.com",
    storageBucket: "cakeorderform2.appspot.com",
  }),
  firebaseAuthConfig(
  {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
  }),
  provideRouter(AppRoutes),
  CanActivateViaAuthGuard,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);