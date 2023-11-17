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

}
