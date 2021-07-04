import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JenkinsAppTest';
  message: string;
constructor(){}

ngOnInit(): void{
  this.ShowTitle();
}

  ShowTitle(): void{
    this.message = 'Hello Jenkins';
  }
}
