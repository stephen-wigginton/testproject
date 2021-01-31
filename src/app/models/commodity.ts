import { PriceMovement } from './PriceMovement';

export class Commodity {
  id: number;
  name: string;
  price: number;
  created_at: Date;
  updated_at?: Date;
  price_movement?: PriceMovement = PriceMovement.NoChange;
  isFavorite?: boolean = false;
  constructor(data?: any) {
    if (data) {
      if (data.id) {
        this.id = data.id;
      }
      if (data.name) {
        this.name = data.name;
      }
      if (!!data.price && data.price != undefined) {
        this.price = data.price;
      }
      if (data.created_at) {
        this.created_at = data.created_at;
      }
      if (data.updated_at) {
        this.updated_at = data.updated_at;
      }
      if (data.price_movement) {
        this.price_movement = data.price_movement;
      } else {
        this.price_movement = PriceMovement.NoChange;
      }

      if (data.isFavorite) {
        this.isFavorite = data.isFavorite;
      } else {
        this.isFavorite = false;
      }

    }

  }
}
