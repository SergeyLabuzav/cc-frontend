import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(environment.apiUrl + 'location');
  }

  save(location: Location): Observable<void> {
    return this.httpClient.post<void>(environment.apiUrl + 'location', location);
  }

  update(location: Location): Observable<void> {
    return this.httpClient.put<void>(environment.apiUrl + 'location', location);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(environment.apiUrl + `location/${id}`);
  }
}
