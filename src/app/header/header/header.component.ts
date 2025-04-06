import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, BadgeModule, AvatarModule, InputTextModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  cartService = inject(CartService);
  router = inject(Router);
  sizeCart = computed(()=>this.cartService.products().length);


  toHomePage(){
    this.router.navigate(['/']);
  }

  toCartPage(){
    this.router.navigate(['/cart']);
  }
}
