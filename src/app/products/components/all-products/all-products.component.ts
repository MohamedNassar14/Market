import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private _ProductService:ProductService) { } 

  allProducts:any[] = [];
  allCategories:string[] = [];
  cartProducts:any[] = [];
  isLoading:boolean = false;


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
   
   getProducts()
   {
     this.isLoading = true;
     this._ProductService.getAllProducts().subscribe({
       next:(data)=> 
       {
         this.isLoading = false;
         this.allProducts = data
       }
     })
   }

   getCategories()
   {
     this._ProductService.getAllCategories().subscribe({
       next:(data)=>  this.allCategories = data
     })
   }

    getProductsBySpecificCategory(categoryName:string)
    {
      this.isLoading = true; 
      this._ProductService.getProductsByCategory(categoryName).subscribe({
        next:(data)=>
        {
          this.isLoading = false;
          this.allProducts = data
        } 
      })
    }
   filterByCategory(event:any)
   {
      let value = event.target.value;
      if (value === 'All')
      {
        this.getProducts();
      }
      else 
      { 
        this.getProductsBySpecificCategory(value);
      }
   }
  
   addToCart(event:any)
   {
      if(localStorage.getItem('carts') !== null)
      {
        this.cartProducts = JSON.parse(localStorage.getItem('carts')!);
        console.log(this.cartProducts);
        
        let existProduct = this.cartProducts.find((product) => product.data.id == event.data.id);
        if(existProduct)
        {
          alert('Already product is exist');
        }
        else
        {
          this.cartProducts.push(event);
          localStorage.setItem('carts', JSON.stringify(this.cartProducts));
        }
      }
      else
      {
        this.cartProducts.push(event);
        localStorage.setItem('carts', JSON.stringify(this.cartProducts));
      }
      


   }


}
