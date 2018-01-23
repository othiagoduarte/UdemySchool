import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from 'app/order/order-summary/order-summary.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { LoginComponent } from 'app/security/login/login.component';

import { LoggedInGuard } from 'app/security/loggedin.guard';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login/:to', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'restaurants/restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent}
        ]},
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'order', loadChildren: 'app/order/order.module#OrderModule', 
        canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: '**', component: NotFoundComponent }
];