import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: WritableSignal<Product[]> = signal<Product[]>([]);
  totalPriceProducts = computed(() => {
    this.products().reduce((acc, product)=> acc + product.price, 0);
  });

  constructor() { }

  getLengthProductsList(): number{
    return this.products.length;
  }

  addToCart(product:Product){
    this.products.update((products) => {
      return [...products, product]
    });
  }
}
