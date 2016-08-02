import {PrimerComponent} from './primer/primer.component';
import {CakeOrderNewComponent} from './cake-order/cake-order-new.component';
import {CanActivateViaAuthGuard} from "./app.CanActivateViaAuthGuard";

export const AppRoutes = [
  {path: '', component: PrimerComponent},
  {path: 'order/new', component: CakeOrderNewComponent, canActivate: [CanActivateViaAuthGuard]}
];