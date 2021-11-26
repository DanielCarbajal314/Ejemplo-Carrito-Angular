import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { SalesItem } from 'src/app/shared/sales/model/sales-item.model';
import { CartItem } from '../model/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public $cartInventory: Subject<CartItem[]> = new Subject();
  public $totalItemsPrice: Observable<number> = this.$cartInventory.pipe(
    map(cartItems => cartItems.reduce((total, cardItem)=> total + cardItem.quantity * cardItem.item.price, 0))
  );
  public $totalItemsCount: Observable<number> = this.$cartInventory.pipe(
    map(cartItems => cartItems.reduce((total, item)=> total + item.quantity, 0))
  )
  private itemsInCart: CartItem[] = [];

  constructor() { }

  addItemToInventory(item: SalesItem) {
    const itemFound = this.itemsInCart.find(x => x.item.id === item.id);
    if (itemFound) {
      itemFound.quantity++;
    } else {
      this.itemsInCart = [
        { item: item, quantity: 1 },
        ...this.itemsInCart
      ]
    }
    this.$cartInventory.next(this.itemsInCart);
  }

}
