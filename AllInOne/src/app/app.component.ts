import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dockerized an Angular application';
  public msg: any;
  // tslint:disable-next-line:typedef
  ngOnInit()
  {
    this.msg = 'Hello from Angular/Docker';
  }
}
