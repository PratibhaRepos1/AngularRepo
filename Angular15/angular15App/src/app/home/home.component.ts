import { Component, OnChanges, OnInit } from '@angular/core';
import { Cars } from '../cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isSpecial = false;

  cars: Cars[] = [
    { 
      name: 'MG Hector',
      color: 'blue'
    },
    {
      name: 'BMW',
      color: 'red'
    },
    {
      name: 'Tesla',
      color: 'gray'
    },
    {
      "name": "Jaguar",
      "color": 'green'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    }
  ];
constructor() {
  console.log('I am in constructor!');
}



ngOnInit() {
  console.log('I am in ngOnInit!');
}

clickMe() {
  this.isSpecial = ! this.isSpecial;
}

}
