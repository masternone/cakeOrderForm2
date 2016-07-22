import {PrimerComponent} from './primer/primer.component';
import {CakeOrderComponent} from './cake-order/cake-order.component';
import {CanActivateViaAuthGuard} from "./app.CanActivateViaAuthGuard";

export const AppRoutes = [
  {path: '', component: PrimerComponent},
  {path: 'order/new', component: CakeOrderComponent, canActivate: [CanActivateViaAuthGuard]}
];