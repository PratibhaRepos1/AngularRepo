import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './car.component.css'
})
export class CarComponent {
name='Ford';
model = 'Nova';
color = 'Black';

date() {
  return Date.now();
}

getTheColor(color:any) {
  if(color !== 'default') {
    this.color = color;
    return this.color;
  }
  return this.color;

}
}
