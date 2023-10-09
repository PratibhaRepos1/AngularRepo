import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-string-in-js',
  templateUrl: './string-in-js.component.html',
  styleUrls: ['./string-in-js.component.css']
})
export class StringInJSComponent implements OnInit{
  myString: string = "";
  myChar: string = "";
  firstName: string = "";
  lastName: string = "";
  fullName?: string = "";


  //1. chatAt(x) : This function will return the character at x position within the string
ngOnInit(): void {

 
  this.myString = "Java Script";
 this.myChar= this.myString.charAt(7);

  //2. concat(v1,v2)

  this.firstName = "Pratibha";
  this.lastName = "Jadhav";
  this.fullName = this.fullName?.concat(this.firstName, " ", this.lastName);
  console.log(this.fullName);

  
}
  


}



