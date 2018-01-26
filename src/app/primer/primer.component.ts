import {Component, OnInit} from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component(
{
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {
  primerCards: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.primerCards = db.collection('/PrimerCards').valueChanges();
  }

  ngOnInit() {
  }

}
