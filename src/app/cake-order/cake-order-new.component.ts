import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  layerSizesCollection$: AngularFirestoreCollection<LayerSize>;
  layerSizes$: Observable<LayerSizeId[]>;
  cakeFlavorsCollection$: AngularFirestoreCollection<CakeFlavor>;
  cakeFlavors$: Observable<CakeFlavorId[]>;
  frostingFlavorsCollection$: AngularFirestoreCollection<FrostingFlavor>;
  frostingFlavors$: Observable<FrostingFlavorId[]>;

  cakeOrderForm: FormGroup;


  constructor(private fb: FormBuilder, private db: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => this.auth = auth);

    this.layerSizesCollection$ = db.collection<LayerSize>('/LayerSizes');
    this.layerSizes$ = this.layerSizesCollection$.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as LayerSize;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });

    this.cakeFlavorsCollection$ = db.collection<CakeFlavor>('/CakeFlavors');
    this.cakeFlavors$ = this.cakeFlavorsCollection$.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CakeFlavor;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });

    this.frostingFlavorsCollection$ = db.collection<FrostingFlavor>('/FrostingFlavors');
    this.frostingFlavors$ = this.frostingFlavorsCollection$.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as FrostingFlavor;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }

  public save() {
    console.log(this.cakeOrderForm);
  }

  private createForm() {
    this.cakeOrderForm = this.fb.group({
      firstName: [this.cakeOrder.firstName, [Validators.required]],
      lastName: [this.cakeOrder.lastName, [Validators.required]],
      email: [this.cakeOrder.email, [Validators.required, Validators.email]],
      phoneNum: [this.cakeOrder.phoneNum, [Validators.required]],
      address1: [this.cakeOrder.address1],
      address2: [this.cakeOrder.address2],
      city: [this.cakeOrder.city],
      state: [this.cakeOrder.state],
      zipcode: [this.cakeOrder.zipcode],
      layers: this.fb.array([])
    });
  }

  ngOnInit() {
    this.cakeOrder = {
      id: null,
      uid: this.auth.uid, // This should be pulled from the user object
      firstName: '',
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
    };
    this.createForm();
  }

  get layers(): FormArray {
    return this.cakeOrderForm.get('layers') as FormArray;
  }

  public addLayer() {
    const config = {};
    config['layerSize'] = ['', [Validators.required]];
    config['cakeFlavor'] = ['', [Validators.required]];
    config['frostingFlavor'] = ['', [Validators.required]];
    config['description'] = ['', [Validators.required]];

    const newLayer = this.fb.group(config);

    this.layers.push(newLayer);
  }

}
