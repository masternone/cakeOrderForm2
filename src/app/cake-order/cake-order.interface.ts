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
  id: number,
  name: string,
  cost: number
}

export interface CakeFlavor{
  id: number,
  name: string,
  cost: number,
  display: string
}

export interface FrostingFlavor {
  id: number,
  name: string,
  cost: number,
  display: string
}