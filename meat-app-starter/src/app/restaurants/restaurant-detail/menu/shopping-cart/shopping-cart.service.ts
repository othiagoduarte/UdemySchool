import { MenuItem } from 'app/restaurants/restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from "app/restaurants/restaurant-detail/menu/shopping-cart/cart-item.model";


export class ShoppingCartService {

    items: CartItem[] = [];

    clear(){
        this.items = []
    };

    addItem(item:MenuItem) {
        let foundItem = this.items.find((mnItem) => mnItem.menuItem.id === item.id);
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
    }

    increaseQty(item: CartItem) {
        item.quantify = item.quantify + 1
    };

    decreaseQty(item: CartItem) {
        item.quantify = item.quantify - 1
        if (item.quantify === 0) {
            this.removeItem(item);    
        }
    };

    removeItem(item:any) {
        this.items.splice(this.items.indexOf(item), 1)
    };

    total(): number {
        return this.items.map(item => item.value())
                         .reduce((prev, value) => prev+value, 0);
    }

    
}