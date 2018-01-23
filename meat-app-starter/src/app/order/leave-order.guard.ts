import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrderComponent } from 'app/order/order.component';

@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent: OrderComponent, 
                activateRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
    if(!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir desta compra?')
    } else {
      return true;
    }             
  }

}
