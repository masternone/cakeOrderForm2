import {Component, OnInit} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

import {CakeOrder, Layer, LayerSizeId, LayerSize, CakeFlavorId, CakeFlavor, FrostingFlavorId, FrostingFlavor} from './cake-order.interface';

@Component(
  {
    selector: 'app-cake-order',
    templateUrl: './cake-order.component.html',
    styleUrls: ['./cake-order.component.scss'],
  })
export class CakeOrderNewComponent implements OnInit {
  auth;
  cakeOrder: CakeOrder;
  firstName = '';
  layerSizesCollection: AngularFirestoreCollection<LayerSize>;
  layerSizes: Observable<LayerSizeId[]>;
  cakeFlavorsCollection: AngularFirestoreCollection<CakeFlavor>;
  cakeFlavors: Observable<CakeFlavorId[]>;
  frostingFlavorsCollection: AngularFirestoreCollection<FrostingFlavor>;
  frostingFlavors: Observable<FrostingFlavorId[]>;

  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => this.auth = auth);

    this.layerSizesCollection = db.collection<LayerSize>('/LayerSizes');
    this.layerSizes = this.layerSizesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as LayerSize;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });

    this.cakeFlavorsCollection = db.collection<CakeFlavor>('/CakeFlavors');
    this.cakeFlavors = this.cakeFlavorsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CakeFlavor;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });

    this.frostingFlavorsCollection = db.collection<FrostingFlavor>('/FrostingFlavors');
    this.frostingFlavors = this.frostingFlavorsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as FrostingFlavor;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
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
