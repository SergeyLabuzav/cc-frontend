import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dataSource: MatTableDataSource<Employee>;
  displayedColumns = ['id', 'fullName', 'location', 'actions'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.employeeService.fetchAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  delete(id: number) {
    this.employeeService.delete(id).subscribe();
  }
}
