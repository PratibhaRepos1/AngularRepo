import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor() { }

   login() {
    // Implement login logic here, e.g., send username and password to a backend API
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // After successful login, you can redirect the user to another page
  }
}
