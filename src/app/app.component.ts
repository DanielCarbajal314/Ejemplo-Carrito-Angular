import { Component, OnInit } from '@angular/core';
import { CartService } from './sales/service/shared-states/cart.service';
import { SalesItem } from './shared/sales/model/sales-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    this.cartService.$cartInventory.subscribe(console.log);
    this.cartService.$totalItemsPrice.subscribe(console.log);
    this.cartService.$totalItemsCount.subscribe(console.log);
  }

}
