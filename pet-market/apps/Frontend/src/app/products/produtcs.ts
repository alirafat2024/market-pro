import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { ProductStore } from '../stores/product.store';

@Component({
  selector: 'app-produtcs',
  imports: [JsonPipe],
  templateUrl: './produtcs.html',
  styleUrl: './produtcs.scss',
})
export class Produtcs {


  productStore = inject(ProductStore);

  constructor() {
    this.productStore.loadProducts();
  }
}
