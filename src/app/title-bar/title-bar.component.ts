import {Component, Input, OnInit} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  @Input() sidenav: Boolean;

  title = 'Cake Order Form 2';

  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
  }
}
