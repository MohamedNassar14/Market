import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService) {}

  cartProducts:any[] = [];
  totalPrice:number = 0;
  success:boolean = false;

  ngOnInit(): void {
     this.displayProducts();
     this.totalPriceProducts();
  }

  displayProducts()
  {
    if(localStorage.getItem('carts') != null)
    {
      this.cartProducts = JSON.parse(localStorage.getItem('carts')!);
    }
  }

  bonus(index:number)
  {
    this.cartProducts[index].quantity++;
    localStorage.setItem('carts', JSON.stringify(this.cartProducts));
    this.totalPriceProducts();
  }


  minus(index:number)
  {
    this.cartProducts[index].quantity--;
    localStorage.setItem('carts', JSON.stringify(this.cartProducts));
    this.totalPriceProducts();
  }

  detectChange()
  {
    localStorage.setItem('carts', JSON.stringify(this.cartProducts));
    this.totalPriceProducts();
  }

  totalPriceProducts()
  {
    this.totalPrice = 0;
    for(let cart of this.cartProducts)
    {
      this.totalPrice += cart.data.price * cart.quantity;
    }
  }

  deleteProduct(index:number)
  {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('carts', JSON.stringify(this.cartProducts));
    this.totalPriceProducts();
  }

  clearAllProducts()
  {
    this.cartProducts = [];
    localStorage.removeItem('carts');
    this.totalPriceProducts();
  }

  sendOrder()
  {
     let newProduct = this.cartProducts.map((product)=> {
      return {productId:product.data.id,quantity:product.quantity}
     });
     let model = {
      userId:5,
      date:new Date(),
      products:newProduct
     }
     this._CartService.sendAllProducts(model).subscribe({
      next:(data) => this.success = true
     })
     
  }

}
