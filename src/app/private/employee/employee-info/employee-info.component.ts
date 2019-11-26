import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employee: Employee;

  constructor(private activatedRoute: ActivatedRoute) {
    this.employee = activatedRoute.snapshot.data.employee;
  }

  ngOnInit() {
  }

  previousState() {
    window.history.back();
  }
}
