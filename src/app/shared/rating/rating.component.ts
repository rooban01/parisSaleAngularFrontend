import { Component, OnInit,  } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
 
  
  constructor() { }
  ngOnInit() {
  }
  countStar(star) {
  

    this.selectedValue = star;
    console.log('Value of star', star);
    return this.selectedValue;
  }
}