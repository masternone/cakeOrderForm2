import {Component, OnInit} from '@angular/core';

import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

import {CakeOrder, Layer, LayerSize, CakeFlavor, FrostingFlavor} from './cake-order.interface';

@Component(
  {
    selector: 'app-cake-order',
    // inputs: ['showForm'],
    templateUrl: './cake-order.component.html',
    styleUrls: ['./cake-order.component.scss'],
  })
// @Inputs('showForm')
export class CakeOrderNewComponent implements OnInit {
  auth;
  cakeOrder: CakeOrder;
  firstName = '';
  layerSizes: Observable<any[]>;
  cakeFlavors: Observable<any[]>;
  frostingFlavors: Observable<any[]>;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => this.auth = auth);
    this.layerSizes = db.collection('/LayerSizes').valueChanges();
    this.cakeFlavors = db.collection('/CakeFlavors').valueChanges();
    this.frostingFlavors = db.collection('/FrostingFlavors').valueChanges();
  }

  public addLayer() {
    let newLayer: Layer = {
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
      uid: this.auth.uid, // This should be pulled from the user object
      firstName: this.firstName,
      lastName: '',
      email: this.auth.email, // This should be pulled from the user object
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
