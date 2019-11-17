import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../shared/model/employee';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(environment.apiUrl + 'employee');
  }

  save(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(environment.apiUrl + 'employee', employee);
  }
}
