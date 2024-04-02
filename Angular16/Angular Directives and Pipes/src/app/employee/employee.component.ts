import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  emplist: Employee[] = [
    {
      id: 1, firstName: 'John', lastName: 'Doe', salary: 50000, dob: '1990-01-01', email: 'john.doe@example.com'
    },
    {
      id: 2, firstName: 'Jane', lastName: 'Smithh', salary: 60000, dob: '1995-05-15', email: 'jane.smith@example.com'
    }
  ];

 
}
