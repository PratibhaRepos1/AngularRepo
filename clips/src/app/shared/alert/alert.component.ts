import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
@Input() color ='blue';

get bgColor() {
 // debugger;
 //return 'orange';
 return `bg-${this.color}-400`




}
}
