import {PrimerComponent} from './primer/primer.component';
import {CakeOrderComponent} from './cake-order/cake-order.component';

export const AppRoutes = [
  { path: '', component: PrimerComponent },
  { path: 'order/new', component: CakeOrderComponent }
];