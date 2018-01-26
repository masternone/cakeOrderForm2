export interface CakeOrder {
  id: string;
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  paymentMethod: string;
  layers: Layer[];
}

export interface Layer {
  id: string;
  layerSize: number;
  cakeFlavor: number;
  frostingFlavor: number;
  description: string;
}

export interface LayerSize {
  name: string,
  cost: number
}

export interface LayerSizeId extends LayerSize {
  id: string;
}

export interface CakeFlavor {
  name: string,
  cost: number,
  display: string
}

export interface CakeFlavorId extends CakeFlavor {
  id: string;
}

export interface FrostingFlavor {
  name: string,
  cost: number,
  display: string
}

export interface FrostingFlavorId extends FrostingFlavor {
  id: string;
}
