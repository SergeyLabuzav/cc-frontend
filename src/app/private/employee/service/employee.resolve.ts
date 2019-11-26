import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Location } from '../../dictionaries/models/location';
import { Employee } from '../model/employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolve implements Resolve<Employee> {

  constructor(private employeeService: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.employeeService.find(id);
    }
    return of({location: {} as Location} as Employee);
  }

}
