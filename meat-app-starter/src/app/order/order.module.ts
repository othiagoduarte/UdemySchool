import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from 'app/order/order.component';
import { OrderItemsComponent } from 'app/order/order-items/order-items.component';
import { DeliveryCostsComponent } from 'app/order/delivery-costs/delivery-costs.component';

import { SharedModule } from './../shared/shared.module';

const ROUTES: Routes = [
  { path: '', component: OrderComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    OrderComponent, 
    OrderItemsComponent, 
    DeliveryCostsComponent
  ]
})

export class OrderModule { }