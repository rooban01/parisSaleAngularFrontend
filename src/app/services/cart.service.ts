import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(theCartItem: CartItem){

    //check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length >0){
      //find the item in the cart based on item id

      existingCartItem = this.cartItems.find (tempCartItem => tempCartItem.id === theCartItem.id);

     /*   for(let tempCartItem of this.cartItems){
         if(tempCartItem.id === theCartItem.id){
             existingCartItem = tempCartItem;
             break;
          }
        }      */
      //check if we found it
      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if(alreadyExistsInCart){
      existingCartItem.quantity++;
    }
    else{
      this.cartItems.push(theCartItem);
    }

    //compute cart total price and total quantity
    this.computeCartTotals();

  }

  decrementQuantity(theCartItem: CartItem){
    theCartItem.quantity--;
    if(theCartItem.quantity === 0){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {

    //get index of item it he given indexn the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => {
      tempCartItem.id === theCartItem.id
    });

    //if found remove the item from the array
    if(itemIndex > -1 ){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }

  computeCartTotals(){
    let totalPriceValue : number =0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){

      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    //publish the new values -- all the subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


  }
}
