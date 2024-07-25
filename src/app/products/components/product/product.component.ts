import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() {}

  @Input() item:any;
  @Output() cartProduct = new EventEmitter();
  addButton:boolean = false;
  amount:number = 0;
  ngOnInit(): void {
    
  }

  add()
  {
    this.cartProduct.emit({data:this.item, quantity:this.amount});   
  }


}
