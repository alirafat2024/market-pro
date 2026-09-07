import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ProductStore } from '../stores/product.store';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-produtcs',
  imports: [JsonPipe, FormsModule, ProductCard],
  templateUrl: './produtcs.html',
  styleUrl: './produtcs.scss',
})
export class Produtcs {
  searchTerm = '';
  searchSubject = new Subject<string>();

  productStore = inject(ProductStore);

  constructor() {
    this.productStore.loadProducts();

    this.searchSubject.subscribe((searchTerm) => {
      this.productStore.searchProducts(searchTerm);
    });
  }

  onSearch(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
}
