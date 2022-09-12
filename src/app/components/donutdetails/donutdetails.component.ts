import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donutdetail } from 'src/app/interfaces/eachdonut';
import { CartService } from 'src/app/services/cart.service';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-donutdetails',
  templateUrl: './donutdetails.component.html',
  styleUrls: ['./donutdetails.component.css']
})
export class DonutdetailsComponent implements OnInit {
  

  donutDetail: any
  id:number =0

  constructor(private donut: DonutService, private route : ActivatedRoute , private _cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.id = Number(params.get('id'));
      this.getDonutDetail();
    })
  }

  getDonutDetail() {
    this.donut.getDonutDetail(this.id).subscribe({next : (data) => {
      console.log(data);
      this.donutDetail = data;
    }})
  }

  addToCart() : void {
    this._cartService.setCartData(this.donutDetail);
    console.log(this.donutDetail)
  }

}
