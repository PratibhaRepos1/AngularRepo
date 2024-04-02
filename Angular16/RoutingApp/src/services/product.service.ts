import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 12',
      description: 'Description for Product 1',
      price: 100,
      image: '../../../images/iphone-12-pro-max.jpeg'
    },
    {
      id: 2,
      name: 'iWatch series 8',
      description: 'Description for Product 2',
      price: 150,
      image: '../../../images/apple-watch-series-8.jpeg'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S22',
        description: 'Description for Product 3',
        price: 350,
        image: '../../../images/galaxy-s22-ultra-5g.jpeg'
      }
    // Add more products as needed
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number | string | null): Product | undefined {
    if (id === null) {
      return undefined; // Return undefined if ID is null
    }
    // Use the "+" operator to convert the id to number type if it's a string
    return this.products.find(product => product.id === +id);
  }

}
