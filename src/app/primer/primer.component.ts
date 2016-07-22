import {Component, OnInit} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {primerCard} from './primerCard'

@Component(
{
  moduleId: module.id,
  selector: 'app-primer',
  templateUrl: 'primer.component.html',
  styleUrls: ['primer.component.css'],
  directives: [MD_CARD_DIRECTIVES]
})
export class PrimerComponent implements OnInit {
  primerCards: FirebaseListObservable<primerCard[]>;

  constructor(af: AngularFire) {
    this.primerCards = af.database.list('/primerCards');
  }

  ngOnInit() {
  }

}
