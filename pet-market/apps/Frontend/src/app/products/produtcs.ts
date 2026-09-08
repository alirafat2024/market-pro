import { Component, inject } from '@angular/core';
import { Product, ProductStore } from '../stores/product.store';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { ProductCard } from '../product-card/product-card';
import { CartStore } from '../stores/cart.store';
@Component({
  selector: 'app-produtcs',
  imports: [FormsModule, ProductCard],
  templateUrl: './produtcs.html',
  styleUrl: './produtcs.scss',
})
export class Produtcs {
  searchTerm = '';
  searchSubject = new Subject<string>();

  productStore = inject(ProductStore);
  cartStore = inject(CartStore);

  constructor() {
    this.productStore.loadProducts();

    this.searchSubject.subscribe((searchTerm) => {
      this.productStore.searchProducts(searchTerm);
    });
  }

  onSearch(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
  addToCart(product: Product) {
    this.cartStore.addToCart(product);
  }
}
