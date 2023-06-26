import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignments';
  showSecret = false;
  log: any[] = [];
  username = '';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  resetUser() {
    this.username = '';
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0 ) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
    console.log(firedNumber);
  }
}
