import { PriceMovement } from './PriceMovement';

export class Commodity {
  id: number;
  name: string;
  price: number;
  created_at: Date;
  updated_at?: Date;
  price_movement?: PriceMovement;
  isFavorite?: boolean = false;
}
