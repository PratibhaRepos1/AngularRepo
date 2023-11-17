import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyDataComponent } from "../mydata/mydata.component";
import { HeaderComponent } from "./header/header.component";
import { CarsComponent } from "./cars/cars.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MyDataComponent, HeaderComponent, CarsComponent]
})
export class AppComponent {
  title = 'Angular17 App';
}
