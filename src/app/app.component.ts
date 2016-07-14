import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
             moduleId: module.id,
             selector: 'app-root',
             templateUrl: 'app.component.html',
             styleUrls: ['app.component.css'],
             directives: [MdButton, MdIcon, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdToolbar],
             providers: [MdIconRegistry]
           })
export class AppComponent {
  title = 'Cake Order Form 2';

  views :Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];
}
