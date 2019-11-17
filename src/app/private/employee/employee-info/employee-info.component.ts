import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/model/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee = {
    id: null,
    fullName: null,
    location: null
  } as Employee;

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.employeeService.save(this.employee).subscribe( () => this.router.navigate(['employee']));
  }

}
