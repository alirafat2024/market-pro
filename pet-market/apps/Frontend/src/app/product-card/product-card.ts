import { Component, input, output } from '@angular/core';
import { Product } from '../stores/product.store';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();

  addToCart = output<Product>();

  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
