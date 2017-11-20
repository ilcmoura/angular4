import { Component, OnInit } from '@angular/core';

import {OrderService} from './order.service'

import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'

import {RadioOption} from '../shared/radio/radio-option.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption [] = [
    {"label": "Dinheiro", "value": "DIN"},
    {"label": "Crédito", "value": "CRED"},
    {"label": "Débito", "value": "DEBT"}
  ]

  delivery: number = 8

  constructor(private orderService : OrderService) { }

  ngOnInit() {
  }

  itemsValue() :number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty (item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty (item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove (item: CartItem) {
    this.orderService.remove(item)
  }

}
