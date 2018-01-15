import { MenuItem } from "app/restaurants/restaurant-detail/menu/menu-item/menu-item.model";

export class CartItem {

    constructor(public menuItem: MenuItem,
                public quantify: number = 1) { }

    value():number {
        return this.menuItem.price * this.quantify
    };
}