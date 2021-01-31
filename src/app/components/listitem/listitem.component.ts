import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Commodity } from 'src/app/models/commodity';
import { PriceMovement } from 'src/app/models/PriceMovement';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListitemComponent implements OnInit {

  @Input() commodity: Commodity;
  @Output() ChangedCommodity: EventEmitter<Commodity> = new EventEmitter<Commodity>();
  public priceMovement = PriceMovement;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleFavorite(item: Commodity) {
    this.ChangedCommodity.emit(Object.assign({}, item, {
      isFavorite: !item.isFavorite
    }));
  }

}
