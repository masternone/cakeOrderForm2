import {Component, OnInit} from '@angular/core';

import {AngularFire} from 'angularfire2';

@Component({
             selector: 'app-title-bar',
             inputs: ['sidenav'],
             templateUrl: './title-bar.component.html',
             styleUrls: ['./title-bar.component.scss']
           })
export class TitleBarComponent implements OnInit {
  title = 'Cake Order Form 2';

  constructor(private af: AngularFire) {

  }

  ngOnInit() {
  }
}
