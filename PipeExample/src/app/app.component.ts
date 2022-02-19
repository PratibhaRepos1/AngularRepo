import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sorting using pipe';
  name = "Angular Universal";

  public person = {
    "firstname": "Angelina",
    "lastname": "Glib"
  }

  public date = new Date();
  customVal = "This is my custome value";

  nameArr = [
    'James',
    'Michael',
    'Robert Smith',
    'Maria Garcia',
    'David Smith',
    'Maria Rodriguez',
    'Mary Smith',
    'Maria Hernandez',
    'Maria Martinez',
    'James Johnson'

  ];

}
