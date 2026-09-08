import { Component, inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  cartStore = inject(CartStore);

    checkout() {
   console.log('Checkout process initiated');
  }
}
