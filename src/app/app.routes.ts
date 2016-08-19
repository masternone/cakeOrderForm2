import {Routes, RouterModule} from '@angular/router';

import {PrimerComponent} from './primer/primer.component';
import {CakeOrderNewComponent} from './cake-order/cake-order-new.component';
import {CanActivateViaAuthGuard} from "./app.CanActivateViaAuthGuard";

const routes: Routes = [
  {path: '', component: PrimerComponent},
  {path: 'order/new', component: CakeOrderNewComponent, canActivate: [CanActivateViaAuthGuard]}
];

export const AppRoutes = RouterModule.forRoot(routes);