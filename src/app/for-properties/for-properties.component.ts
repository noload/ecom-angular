import { Component } from '@angular/core';
import {Products} from "../fakestorecontract"
@Component({
  selector: 'app-for-properties',
  templateUrl: './for-properties.component.html',
  styleUrl: './for-properties.component.css'
})
export class ForPropertiesComponent {

  public products:Products[]=[];

  //It will call when component is called  (Life Cycle Hook)
  ngOnInit(){
    fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data=>{
      this.products = data
    })
  }
}
