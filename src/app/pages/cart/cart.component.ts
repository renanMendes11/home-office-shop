import { Component, computed, inject } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, ButtonModule, StepperModule, FormsModule, Select,CardModule, DividerModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
  products = this.cartService.products();
  totalPrice = this.cartService.totalPriceProducts();

  quantityItems: number[] = [1,2,3,4,5,6,7,8,9,10];
  selectedItem: number | undefined = 1;
}
