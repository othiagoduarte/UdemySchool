import { LoginService } from './../security/login/login.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { RatingComponent } from 'app/shared/rating/rating.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { OrderService } from 'app/order/order.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurants/restaurant-detail/menu/shopping-cart/shopping-cart.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { LoggedInGuard } from 'app/security/loggedin.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent, 
    RadioComponent, 
    RatingComponent,
    SnackbarComponent
  ],
  declarations: [
    InputComponent, 
    RadioComponent, 
    RatingComponent,
    SnackbarComponent
  ]
})

export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService, 
        RestaurantsService, 
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard
      ]
    }
  }
}
