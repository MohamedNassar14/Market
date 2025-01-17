import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductsModule { }
