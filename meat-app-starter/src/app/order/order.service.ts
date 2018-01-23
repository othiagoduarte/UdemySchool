import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { ShoppingCartService } from 'app/restaurants/restaurant-detail/menu/shopping-cart/shopping-cart.service';

import { CartItem } from 'app/restaurants/restaurant-detail/menu/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';

import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient) { }

  itemsValue(): number {
    return this.cartService.total()
  };

  cartItems(): CartItem[] {
    return this.cartService.items
  };

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  };

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  };

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  };

  clear() {
    this.cartService.clear()
  };

  checkOrder(order: Order): Observable<string> { 
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id);
  }
  
}
