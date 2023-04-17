import { Component, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, DoCheck{
  title = 'Welcome to Angular 15App 😊💖';

  ngOnChanges(changes: any) {
    console.log(changes, 'I am in ngOnChanges!');
  }

  ngDoCheck(): void {
    console.log('I am in DoCheck!');
  }
}
