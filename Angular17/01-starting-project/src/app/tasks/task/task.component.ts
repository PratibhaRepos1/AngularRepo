import { Component, Input } from '@angular/core';
// another approch type vs interface
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;

}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!:Task;
  

}
