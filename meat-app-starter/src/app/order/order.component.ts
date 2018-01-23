import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CartItem } from 'app/restaurants/restaurant-detail/menu/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import 'rxjs/operator/do';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: [ ]
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  orderId: string;
  delivery: number = 8;
  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro',         value: 'MON'},
    { label: 'Cartão de Débito', value: 'DEB'},
    { label: 'Cartão Refeição',  value: 'REF'}
  ];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.orderForm = this.formBuilder.group({
      name:              this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email:             this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address:           this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number:            this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      paymentOption:     this.formBuilder.control('', [Validators.required]),
      optionalAddress:   this.formBuilder.control('')
    }, {validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {

    const email             = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email.value || !emailConfirmation.value) {
      return undefined
    } 
    
    if (email.value !== emailConfirmation.value) {
      return {emailNotMatch: true}
    }

    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  };

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  };

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  };

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  };

  remove(item: CartItem) {
    this.orderService.remove(item)
  };

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
                           .map((item:CartItem) => new OrderItem(item.quantify, item.menuItem.id))

    this.orderService.checkOrder(order)
                     .do((orderId: string) => {
                       this.orderId = orderId
                     })
                     .subscribe((orderId: string) => {
                      this.router.navigate(['/order-summary'])
                      this.orderService.clear()
                     });
  };

  isOrderCompleted(): boolean {
    return this.orderId !== undefined
  };

}
