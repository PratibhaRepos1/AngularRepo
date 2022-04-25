import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  PrintToConsole(arg) {
    console.log(arg)
  }
}
