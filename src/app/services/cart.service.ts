import { Injectable, signal, WritableSignal } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: WritableSignal<Product[]> = signal<Product[]>([]);

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
