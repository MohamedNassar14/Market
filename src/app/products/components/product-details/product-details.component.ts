import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';





@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _ProductService:ProductService, private _ActivatedRoute:ActivatedRoute) {}

    productDetails:any;
    isLoading:boolean = false;
    
    
   
  ngOnInit(): void {
    let {id} = this._ActivatedRoute.snapshot.params;
    this.singleProductDetails(id);
  }

  singleProductDetails(id:string)
  {
      this.isLoading = true;
      this._ProductService.getSingleProduct(id).subscribe({
        next:(data)=>
        {
          this.isLoading = false;
          this.productDetails = data
        } 
      })
  }

}
