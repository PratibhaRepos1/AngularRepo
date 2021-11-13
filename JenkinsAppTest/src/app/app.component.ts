import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JenkinsAppTest';
  message: string;
  myInputMessage = 'I am the Parent Component';

constructor(){}

ngOnInit(): void{
  this.ShowTitle();
  console.log(this.myInputMessage);
}

  ShowTitle(): void{
    this.message = 'Hello Jenkins';
  }
  // tslint:disable-next-line:typedef
  GetChildData(data){
    console.log(data);
  }
}
