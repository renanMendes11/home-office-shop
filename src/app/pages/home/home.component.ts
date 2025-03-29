import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../types/Product';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ImageModule, ButtonModule, CardModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products = signal<Product[]>([]);
  cartService = inject(CartService);
  
   ngOnInit():void {
     this.getProducts();
  }

  getProducts(): void{
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const productsEletronics = data.filter((product:any) => product.category === "electronics");
        console.log(productsEletronics);
        this.products.set(productsEletronics);
      });
  }

  addToCart(product: Product) {
   this.cartService.addToCart(product);
  }


}
