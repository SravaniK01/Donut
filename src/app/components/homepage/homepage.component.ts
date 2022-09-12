import { Component, OnInit } from '@angular/core';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  donutList: any ;

  constructor(private donut:DonutService) { }

  ngOnInit(): void {
   this.getDonutList();


  }
  getDonutList() {
    this.donut.getDonutList().subscribe({next : (data) => {
      console.log(data);
      this.donutList = data;
    }})
  }

}
