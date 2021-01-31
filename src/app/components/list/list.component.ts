import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap, map } from 'rxjs/operators';
import { Commodity } from 'src/app/models/commodity';
import { PriceMovement } from 'src/app/models/PriceMovement';
import { CommodityService } from 'src/app/service/commodity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public commodities: Array<Commodity>;
  constructor(private cService: CommodityService) {
    this.commodities = new Array<Commodity>();
  }


  ngOnInit(): void {
    interval(5000).pipe(
      startWith(0),
      switchMap(() => this.cService.getCommodity())
    ).subscribe(res => {

      this.commodities = res.map(e => new Commodity(e)).map(com => {
        const currItem = this.commodities.find(e => e.id === com.id);
        if (currItem) {
          let movement: PriceMovement;
          if (com.price > currItem.price) {
            movement = PriceMovement.Up;
          } else if (com.price < currItem.price) {
            movement = PriceMovement.Down;
          } else {
            movement = PriceMovement.NoChange
          }

          return Object.assign({}, com, {
            price_movement: movement,
            price: com.price,
            isFavorite: com.isFavorite
          });
        }
        return com;

      }).sort((a, b) => {
        return a.id > b.id ? 1 : -1;
      })

    })
  }

  handleUpdatedFavorite(commodity: Commodity) {
    let existingIndex = this.commodities.findIndex(e => e.id === commodity.id)

    if (existingIndex && existingIndex > -1) {
      this.commodities = [
        ...this.commodities.slice(0, existingIndex === 0 ? 1 : existingIndex),
        commodity,
        ...this.commodities.slice(existingIndex + 1)
      ];
    }
  }

}
