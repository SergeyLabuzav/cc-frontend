import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../../shared/model/employee';
import { Observable } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // dataSource: Observable<Employee[]>;
  dataSource: MatTableDataSource<Employee>; // = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns = ['id', 'fullName', 'location'];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.employeeService.fetchAll().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  create() {
    this.router.navigate(['employee', 'new']);
  }
}
