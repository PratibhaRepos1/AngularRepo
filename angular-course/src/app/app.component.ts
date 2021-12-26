import { COURSES } from './../db-data';
import { Component, OnInit } from '@angular/core';
import { Course } from './model/Course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

courses = COURSES;


 imageSrc = '../assets/images/logo.jpeg';
 imageAlt = 'logo';
 // tslint:disable-next-line:typedef
 ngOnInit() {

 }

 onEditCourse(): void {}
 // tslint:disable-next-line:typedef
 onCourseSelected(course: Course){
   console.log('onCardClicked called', course);
 }

}
