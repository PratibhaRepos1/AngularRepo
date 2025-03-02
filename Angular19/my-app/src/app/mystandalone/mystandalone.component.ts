import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-mystandalone',
  imports: [CommonModule],
  templateUrl: './mystandalone.component.html',
  styleUrl: './mystandalone.component.css'
})
export class MystandaloneComponent {
  theme = 'dark';
  isFormValid = false;
  items = ['item1', 'item2', 'item3'];
  pageID = 2;
  userData = of({name: 'John', age: 30});

  changeTheme(){
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
