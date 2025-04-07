import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, ButtonModule, StepperModule, FormsModule, Select, CardModule, DividerModule, FooterComponent],
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
