import { Service,inject } from '@angular/core';
import { CartStore } from '../stores/cart.store';
import { HttpClient } from '@angular/common/http';
@Service()
export class Stripe {
cartStore = inject(CartStore);
  http = inject(HttpClient);

  
  createCheckoutSession() {
    const items = this.cartStore.items();
    const totalAmount = this.cartStore.totalAmount();

    return this.http.post<{ url: string }>(
          `http://localhost:3000/api/checkout`,
          {
            items: items.map((item) => ({
              productId: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              image:item.image,
              stripePriceId: item.stripePriceId,
            })),
            totalAmount,
          } 
      )
  }
}
