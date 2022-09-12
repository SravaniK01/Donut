import { Component, OnInit } from '@angular/core';
import { Donutdetail } from 'src/app/interfaces/eachdonut';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data : Donutdetail[] =[]
  totalCalories : number =0

  constructor(private _cartService : CartService) { }

  ngOnInit(): void {
    this.data = this._cartService.getCartData();

    for(var i: number = 0 ; i < this.data.length ; i++){
      this.totalCalories = this.totalCalories + this.data[i].calories;
    } 
    
  }

  removeItem(item: Donutdetail): void {
    this._cartService.removeItem(item)
    this.totalCalories = this.totalCalories - item.calories;
  }

}
