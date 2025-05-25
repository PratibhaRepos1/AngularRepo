import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
 
})
export class DashboardItemComponent {
  // 1st way : using @Input directive
// @Input({required: true}) image!: { src:string, alt:string}
// @Input({required:true}) title!: string;

// 2nd way: using input() function, avialable in angular 17 and later version
image = input.required<{ src:string, alt:string}>();
title = input.required<string>();

}
