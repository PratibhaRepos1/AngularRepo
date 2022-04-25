import { TestService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReviseAngular';
  storedPosts = []

  constructor(svc: TestService) {

    svc.PrintToConsole('calling test service');
  }

  onPostAdded(event) {
    this.storedPosts.push(event);

  }
}
