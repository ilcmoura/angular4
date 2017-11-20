import {Injectable} from '@angular/core'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'

import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService){}

  itemsValue() :number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    console.log("increase service = " + item)
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    console.log("decrease service = " + item)
    this.cartService.decreaseQty(item)
  }

  remove (item: CartItem) {
    console.log("removeItem service = " + item)
    this.cartService.removeItem(item)
  }
}
