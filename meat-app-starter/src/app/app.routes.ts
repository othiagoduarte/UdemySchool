import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from 'app/order/order-summary/order-summary.component';
 
export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent},
    { path: 'restaurants/restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent}
        ]},
    { path: 'order', loadChildren: 'app/order/order.module#OrderModule'},
    { path: 'order-summary', component: OrderSummaryComponent},
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
];