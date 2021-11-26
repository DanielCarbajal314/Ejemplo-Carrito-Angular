import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/sales/service/shared-states/cart.service';
import { SalesItem } from '../model/sales-item.model';

@Component({
  selector: 'sales-item-displayer',
  templateUrl: './sales-item-displayer.component.html',
  styleUrls: ['./sales-item-displayer.component.scss']
})
export class SalesItemDisplayerComponent implements OnInit {
  @Input() model?: SalesItem;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItemToCard() {
    this.cartService.addItemToInventory(this.model!);
  }

}
