import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NewemployeeComponent } from './newemployee/newemployee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewemployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularServices';
}
