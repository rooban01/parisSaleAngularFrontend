import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
   //subscribe to the cart total price
   this.cartService.totalPrice.subscribe(
       data => this.totalPrice = data );
      
   //subscribe to the cart totalQuantity;
   this.cartService.totalQuantity.subscribe(
     data => this.totalQuantity = data );
  }


}
