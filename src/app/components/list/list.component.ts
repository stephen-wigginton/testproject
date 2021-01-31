import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Commodity } from 'src/app/models/commodity';
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
    interval(500).pipe(
      startWith(0),
      switchMap(() => this.cService.getCommodity())
    ).subscribe(res => {
      console.table(res);
      this.commodities = res;
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
