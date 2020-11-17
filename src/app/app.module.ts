import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './services/product.service';

import { HeaderComponent } from './components/nav/header/header.component';
import { SearchComponent } from './components/nav/search/search.component';
import { LoginComponent } from './components/nav/login/login.component';
import { FooterComponent } from './components/nav/footer/footer.component';
import { CartComponent } from './components/nav/cart/cart.component';
import { SidebarComponent } from './components/nav/sidebar/sidebar.component';

import { ProductListComponent } from './components/ecommerce-fonctions/product-list/product-list.component';
import { ProductCategoryComponent } from './components/ecommerce-fonctions/product-category/product-category.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/ecommerce-fonctions/product-details/product-details.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/nav/pagination/pagination.component';
import { AuthComponent } from './components/nav/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { RatingComponent } from './shared/rating/rating.component';
import { RatingModule } from 'ng-starrating';
import { CartDetailsComponent } from './components/nav/cart-details/cart-details/cart-details.component';
import { CheckoutComponent } from './components/nav/checkout/checkout.component';



const routes: Routes = [
   {path: 'products/:id' , component: ProductDetailsComponent},
   {path: 'search/:keyword', component: ProductListComponent},
    {path: 'productCategory', component: ProductListComponent},
    {path: 'productCategory/:id/:name' , component: ProductListComponent},
   {path: 'products', component: ProductListComponent},
   {path: 'checkout', component: CheckoutComponent},
   {path: 'cart-details' , component: CartDetailsComponent},
   {path: 'auth', component: AuthComponent},
   {path: '' ,redirectTo: '/products', pathMatch:'full'},
   {path: '**', redirectTo:'/products', pathMatch:'full'},



];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    SearchComponent,
    LoginComponent,
    CartComponent,
    FooterComponent,
    SidebarComponent,
    ProductCategoryComponent,
    ProductDetailsComponent,
    DropdownDirective,
    PaginationComponent,
    AuthComponent,
    RatingComponent,
    CartDetailsComponent,
    CheckoutComponent,




  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RatingModule,
    ReactiveFormsModule

  ],
  providers: [ProductService,AuthService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
