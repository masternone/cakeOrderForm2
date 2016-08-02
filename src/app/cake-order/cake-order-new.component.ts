import {Component, OnInit} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
// import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {CakeOrder, Layer, LayerSize, CakeFlavor, FrostingFlavor} from "./cake-order.interface";

@Component(
{
  moduleId: module.id,
  selector: 'app-cake-order',
  inputs: ['showForm'],
  templateUrl: 'cake-order.component.html',
  styleUrls: ['cake-order.component.css'],
  directives: [MdButton, MdIcon, MD_CARD_DIRECTIVES, MdInput, /*MdCheckbox,*/ MdRadioButton, MdRadioGroup],
  providers: [MdIconRegistry]
})
export class CakeOrderNewComponent implements OnInit {
  auth;
  cakeOrder: CakeOrder;
  firstName:string = '';
  layerSizes: FirebaseListObservable<LayerSize[]>;
  cakeFlavors: FirebaseListObservable<CakeFlavor[]>;
  frostingFlavors: FirebaseListObservable<FrostingFlavor[]>;

  constructor(private af: AngularFire) {
    af.auth.subscribe(auth => this.auth = auth.auth);
    // console.log(this.auth);
    this.layerSizes = af.database.list('/LayerSizes');
    this.cakeFlavors = af.database.list('/CakeFlavors');
    this.frostingFlavors = af.database.list('/FrostingFlavors');
  }

  public addLayer() {
    let newLayer:Layer = {
      id: null,
      layerSize: 0,
      cakeFlavor: 0,
      frostingFlavor: 0,
      description: ''
    };
    this.cakeOrder.layers.push(newLayer);
  }

  ngOnInit() {
    this.cakeOrder = {
      id: null,
      uid: this.auth.uid, //This should be pulled from the user object
      firstName: this.firstName,
      lastName: '',
      email: this.auth.email, //This should be pulled from the user object
      phoneNum: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      paymentMethod: '',
      layers: []
    }
  }

}
