import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  isShown: boolean = false; // hidden by default
  @Input() myInputMsg: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  // tslint:disable-next-line:no-inferrable-types
  OutputMsg: string = 'I am child component';
  constructor() { }

  ngOnInit(): void {
    console.log(this.myInputMsg);
  }
  // tslint:disable-next-line:typedef
  toggleShow() {

    this.isShown = !this.isShown;

  }
  // tslint:disable-next-line:typedef
  sendValues(){
    debugger;
    this.myOutput.emit(this.OutputMsg);

  }

}
