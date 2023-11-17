import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from "./car/car.component";

@Component({
    selector: 'app-cars',
    standalone: true,
    templateUrl: './cars.component.html',
    styleUrl: './cars.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, CarComponent]
})
export class CarsComponent {
    constructor() {}
    ngOnInit() {

    }

}
