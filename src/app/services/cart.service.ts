import { Injectable } from '@angular/core';
import { Donutdetail } from '../interfaces/eachdonut';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data : Donutdetail[] =[]

  constructor() { }

  setCartData(item: Donutdetail): void {
    // const donut = this.data.find(_donut => _donut.id === item.id);
    // if(!donut) {
      this.data.push(item);
    
  }
  getCartData(): Donutdetail[] {
    return this.data;
  }
  removeItem(item:Donutdetail):void {
    const donutIndex = this.data.findIndex(_donut => _donut.id === item.id)
    if(donutIndex > -1){
      this.data.splice(donutIndex,1)
    }
  }
}
