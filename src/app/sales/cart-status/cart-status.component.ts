import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/shared-states/cart.service';

@Component({
  selector: 'cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {
  totalItemsPrice: number = 0;
  totalItemsCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.$totalItemsPrice.subscribe(totalItemsPrice => this.totalItemsPrice = totalItemsPrice);
    this.cartService.$totalItemsCount.subscribe(totalItemsCount => this.totalItemsCount = totalItemsCount);
  }

}
