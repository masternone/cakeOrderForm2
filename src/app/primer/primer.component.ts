import {Component, OnInit} from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {PrimerCard} from './primerCard.interface'

@Component(
{
  selector: 'app-primer',
  templateUrl: 'primer.component.html',
  styleUrls: ['primer.component.scss']
})
export class PrimerComponent implements OnInit {
  primerCards: FirebaseListObservable<PrimerCard[]>;

  constructor(af: AngularFire) {
    this.primerCards = af.database.list('/PrimerCards');
  }

  ngOnInit() {
  }

}
