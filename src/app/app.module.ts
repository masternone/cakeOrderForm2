import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, ApplicationRef} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {appRoutingProviders, routing} from './app.routes';
import {CanActivateViaAuthGuard} from './app.CanActivateViaAuthGuard'
import {TitleBarComponent} from './title-bar';
import {PrimerComponent} from './primer'
import {CakeOrderNewComponent} from './cake-order'


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
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule,

      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatSelectModule,
      MatSidenavModule,
      MatToolbarModule,

      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AngularFireAuthModule,

      routing
    ],
    providers: [
      appRoutingProviders,
      CanActivateViaAuthGuard
    ],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
  })
export class AppModule {
}
