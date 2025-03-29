import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, ButtonModule, StepperModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
