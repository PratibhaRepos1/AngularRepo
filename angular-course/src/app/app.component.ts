import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // title = 'angular-course';

 data = {
   title: ' Angular Core Deep Dive'
 };

 imageSrc = '../assets/images/logo.jpeg';
 imageAlt = 'logo';
 // tslint:disable-next-line:typedef
 ngOnInit() {

 }
 onLogoClicked(): void {
   alert('Hello Angular World!');
 }
 onKeyUp(newtitle: string): void {
     this.data.title = newtitle;
 }

}
