import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employee: Employee;
  locations: Location[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
    this.employee = activatedRoute.snapshot.data.employee;
    this.locations = activatedRoute.snapshot.data.locations;
  }

  ngOnInit() {
  }

  previousState() {
    window.history.back();
  }

  private navigateToProducts() {
    this.router.navigate(['/', 'employee']);
  }

  save() {
    if (this.employee.id) {
      this.employeeService.update(this.employee).subscribe(() => this.navigateToProducts());
    } else {
      this.employeeService.save(this.employee).subscribe(() => this.navigateToProducts());
    }
  }
}
