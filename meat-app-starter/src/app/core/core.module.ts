import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

import { SharedModule} from '../shared/shared.module';

import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantsService } from '../restaurants/restaurants.service'

@NgModule({
  providers: [OrderService, ShoppingCartService, RestaurantsService]
})

export class CoreModule {}
