import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../model/Course';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();


  imageSrc = '../assets/images/logo.jpeg';
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onCourseViewed() {
    console.log('course card clicked');
    this.courseSelected.emit(this.course);

  }
}
