import { Component } from '@angular/core';
import { COURSES } from 'db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 courses = COURSES;


  data = {
    title: 'Angular Core Deep Dive',
  };

  onClick() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course: Course) {
    console.log('App Component - button cliked', course);
  }
}
