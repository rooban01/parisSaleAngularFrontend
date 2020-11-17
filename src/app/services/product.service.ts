import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';




@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private categoryUrl = 'http://localhost:8080/api/productCategory';
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }



  getProductList(theProductCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByProductCategoryId?id=${theProductCategoryId}`;

    return this.getProducts(searchUrl);


  }
  getProductCategory(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(Response => Response._embedded.productCategory)
    );
  }


  getProductListPaginate(thePage: number,
    thePageSize: number,
    theProductCategoryId: number): Observable<GetResponseProducts> {

    const searchUrl = `${this.baseUrl}/search/findByProductCategoryId?id=${theProductCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);


  }


  searchProducts(theKeyword: string): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByProductNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }
 
  searchProductsPaginate(thePage: number, 
    thePageSize: number,                          
    theKeyword: string): Observable<GetResponseProducts> {

   // need to build URL based on category id ,page and size
   const searchUrl = `${this.baseUrl}/search/findByProductNameContaining?name=${theKeyword}`
   + `&page=${thePage}&size=${thePageSize}`;

       return this.httpClient.get<GetResponseProducts>(searchUrl);
}

  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

}
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}


interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}



