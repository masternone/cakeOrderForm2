import {Component} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

import {TitleBarComponent} from './title-bar/title-bar.component';
import {CakeOrderComponent} from './cake-order/cake-order.component';

@Component({
             moduleId: module.id,
             selector: 'app-root',
             templateUrl: 'app.component.html',
             styleUrls: ['app.component.css'],
             directives: [MdIcon, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, TitleBarComponent, CakeOrderComponent],
             providers: [MdIconRegistry]
           })
export class AppComponent {
  showForm = false;

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];

  showFormToggle() {
    this.showForm = !this.showForm;
  }
}
