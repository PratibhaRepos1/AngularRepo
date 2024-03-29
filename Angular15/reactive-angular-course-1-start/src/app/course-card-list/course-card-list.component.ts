import { Component, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { EventEmitter } from '@angular/core';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent {
  constructor(private dialog: MatDialog){}
  @Input() courses: Course[] = [];

  @Output() private coursesChanged = new EventEmitter();

  editCourse(course: Course) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
    dialogRef.afterClosed()
    .pipe(
      filter(val => !!val),
      tap(() => this.coursesChanged.emit())
    )
    .subscribe();

  }

}
