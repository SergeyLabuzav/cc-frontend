import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class LocationResolve implements Resolve<Location[]> {

  constructor(private locationService: LocationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location[]> {
    return this.locationService.fetchAll();
  }
}
