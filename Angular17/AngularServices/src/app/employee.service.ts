import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee2 } from '../app/newemployee/employee2';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee2[]> {
    return this.http.get<Employee2[]>(this.apiUrl);
  }
}
