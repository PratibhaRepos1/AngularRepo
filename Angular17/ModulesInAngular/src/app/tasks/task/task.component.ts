import { Component,  inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';

import { TasksService } from '../tasks.service';
// another approch type vs interface


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;


  private taskService = inject(TasksService);


  onCompleteTask() {
    this.taskService.removeTask(this.task.id);

  }

 
}
