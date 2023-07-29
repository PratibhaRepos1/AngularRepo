import { Component, OnInit } from '@angular/core';
import  * as products from '../../assets/data/productData.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = (products as any).default;

  ngOnInit(): void {

    //console.log(products);
    
  }


}
