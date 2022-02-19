import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameSearch: string = ''
  productArr = [
    {
      sno: 1,
      name: 'mobile',
      price: 7000,
      availablity: 'Available'
    },
    {
      sno: 2,
      name: 'TV',
      price: 57000,
      availablity: 'Not Available'
    },
    {
      sno: 3,
      name: 'laptop',
      price: 45000,
      availablity: 'Available'
    },
    {
      sno: 4,
      name: 'mobile iphone',
      price: 7000,
      availablity: 'Available'
    }
  ];

}
