//TODO: look into routing as a seperate module. The cli beta.16 wanst to do it that way.
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PrimerComponent} from './primer/primer.component';
import {CakeOrderNewComponent} from './cake-order/cake-order-new.component';
import {CanActivateViaAuthGuard} from './app.CanActivateViaAuthGuard';

const appRoutes: Routes = [
  {path: '', component: PrimerComponent},
  {path: 'order/new', component: CakeOrderNewComponent, canActivate: [CanActivateViaAuthGuard]}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);