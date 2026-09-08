import { Component, inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { Stripe } from '../services/stripe';
@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {

  cartStore = inject(CartStore);
  stripeService=inject(Stripe);

   checkout() {
    this.stripeService.createCheckoutSession().subscribe(({ url }) => {
      location.href = url;
    });
  }
}
