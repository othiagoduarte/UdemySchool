import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantDetailComponent } from 'app/restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurants/restaurant-detail/reviews/reviews.component';
 
export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent},
    { path: 'restaurants/restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent}
        ]},
    { path: 'about', component: AboutComponent},
];