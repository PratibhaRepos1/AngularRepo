import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwdGenerator';
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    this.password = 'MY PASSWORD!!!';
    console.log(this.includeLetters);
    console.log(this.includeNumbers);
    console.log(this.includeSymbols);
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;

  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;

  }
  onChnageUseSymbols() {
    this.includeSymbols = !this.includeSymbols;

  }
}
