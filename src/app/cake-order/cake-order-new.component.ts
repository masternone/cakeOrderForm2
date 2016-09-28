import {Component, OnInit} from '@angular/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {CakeOrder, Layer, LayerSize, CakeFlavor, FrostingFlavor} from "./cake-order.interface";

@Component(
{
  selector: 'app-cake-order',
  inputs: ['showForm'],
  templateUrl: 'cake-order.component.html',
  styleUrls: ['cake-order.component.scss'],
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
