import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  getTime() {
    return new Date();
  }
}
