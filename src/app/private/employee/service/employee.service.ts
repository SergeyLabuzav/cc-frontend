import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeUrl: string = environment.apiUrl + 'employee';

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employeeUrl);
  }

  save(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.employeeUrl, employee);
  }

  find(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.employeeUrl + `/${id}`);
  }

  update(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(this.employeeUrl, employee);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.employeeUrl + `/${id}`);
  }
}
