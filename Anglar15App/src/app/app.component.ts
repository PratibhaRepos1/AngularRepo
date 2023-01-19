import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anglar15App';
  name = 'Luis';
  imgURL = 'https://picsum.photos/seed/picsum/200/300'
  getName() {

    return this.name;

  }

  changeImage(e:KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value

  }

  logImg(event:string) {
    console.log(event);
  }
}
