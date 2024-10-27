import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
 
  name:string="Vaibhav"
  product={
    name:"Realme",
    price:2000,
    color:"Green",
    discount:20,
    inStock:0,
    Image:"/src/assets/images/krish.jpeg"
  }

  getDiscountedPrice(){
    return this.product.price -  (this.product.price * this.product.discount / 100)
  }

}
