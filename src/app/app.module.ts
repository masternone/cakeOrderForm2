import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdIconModule} from '@angular2-material/icon';
import {MdListModule} from '@angular2-material/list';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';

import {
AuthMethods,
AuthProviders,
AngularFireModule
} from 'angularfire2';

import * as firebase from 'firebase';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {CanActivateViaAuthGuard} from './app.CanActivateViaAuthGuard'
import {TitleBarComponent} from './title-bar/title-bar.component';
import {PrimerComponent} from './primer/primer.component'
import {CakeOrderNewComponent} from './cake-order/cake-order-new.component'

const myFirebaseConfig = {
  apiKey: "AIzaSyClMUeCVSKC1F50BHIH9gjWyoBn1rrpc9o",
  authDomain: "cakeorderform2.firebaseapp.com",
  databaseURL: "https://cakeorderform2.firebaseio.com",
  storageBucket: "cakeorderform2.appspot.com",
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule(
{
  declarations: [
    AppComponent,
    TitleBarComponent,
    PrimerComponent,
    CakeOrderNewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),

    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,

    AppRoutes
  ],
  providers: [
    CanActivateViaAuthGuard
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
