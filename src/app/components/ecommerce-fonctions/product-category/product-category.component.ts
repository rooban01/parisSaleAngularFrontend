import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})

export class ProductCategoryComponent implements OnInit {

  productCategory: ProductCategory[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProductCategory ();
  }

  listProductCategory() {
    this.productService.getProductCategory().subscribe(
      data =>{
    
       this.productCategory = data;

      }
    )
  }

}
