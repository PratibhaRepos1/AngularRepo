import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host: {
    class: 'control'
  }
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement> ;
// private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

//@Output() add = new EventEmitter<{title:string, text:string}>();

enteredTitle = '';
enteredText = '';

  add = output<{title:string; text:string}>();
  
  constructor(){}

  ngOnInit() {
     console.log('OnInit!');
  console.log(this.form?.nativeElement);
    
  }

  ngAfterViewInit() {
  console.log('After View Init!');
  console.log(this.form?.nativeElement);

}

  onSubmit() {
    
    this.add.emit({title:this.enteredTitle, text:this.enteredText});

    this.enteredTitle = '';
    this.enteredText = '';
    //this.form?.nativeElement.reset();

    //this.form().nativeElement.reset();

  }
}
