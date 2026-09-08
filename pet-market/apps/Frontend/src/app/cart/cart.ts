import { Component, inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  cartStore = inject(CartStore);

  updateQuantity(productId: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const quantity = parseInt(target.value);
    if (quantity > 0) {
      this.cartStore.updateQuantity(productId, quantity);
    }
  }

}
