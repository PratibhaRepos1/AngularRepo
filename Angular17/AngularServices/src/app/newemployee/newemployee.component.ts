import { Component, OnInit } from '@angular/core';
import { Employee2 } from '../../app/newemployee/employee2';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newemployee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newemployee.component.html',
  styleUrl: './newemployee.component.css'
})
export class NewemployeeComponent implements OnInit {
 
  employees: Employee2[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees); // Accessing data array from the API response
  }






}
