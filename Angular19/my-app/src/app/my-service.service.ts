import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(http:HttpClient) { }
  myReq(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
    return 'Hello World';
  }
}
