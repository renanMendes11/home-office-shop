import { Component, inject, OnInit, signal } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../types/Product';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CartService } from '../../services/cart.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ImageModule, ButtonModule, CardModule, CarouselModule, FooterComponent, SkeletonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products = signal<Product[]>([]);
  cartService = inject(CartService);
  loading = signal<boolean>(true);
  
   ngOnInit():void {
     this.getProducts();
  }

  getProducts(): void{
    setTimeout(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const productsEletronics = data.filter((product:any) => product.category === "electronics");
        this.products.set(productsEletronics);
        this.loading.set(false);
      });
    }, 2000);
    
  }

  addToCart(product: Product) {
   this.cartService.addToCart(product);
  }


}
