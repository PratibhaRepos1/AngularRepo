import { Component, ViewChild } from '@angular/core';
import { COURSES } from 'db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;

  @ViewChild(CourseCardComponent)
  card!: CourseCardComponent;

  startDate = new Date(200, 0, 1);
  data = {
    title: 'Angular core deep dive',
  };

  price = 9.99;
  rate = 0.67;

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
