import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

   getAllProducts():Observable<any>
   {
      return this._HttpClient.get(`https://fakestoreapi.com/products`);
   }

   getAllCategories():Observable<any>
   {
      return this._HttpClient.get(`https://fakestoreapi.com/products/categories`);
   }

   getProductsByCategory(category:string):Observable<any>
   {
      return this._HttpClient.get(`https://fakestoreapi.com/products/category/${category}`)
   }

   getSingleProduct(id:string):Observable<any>
   {
      return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`);
   }

}
