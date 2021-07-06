import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any> {
    return this.http.get<any>(`${environment.base_url}/api/locations`);
  }

  deleteLocation(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.base_url}/api/locations/${id}`);
  }

  createLocation(form: FormGroup): Observable<any> {
    return this.http.post<any>(`${environment.base_url}/api/locations`, form.getRawValue());
  }

  editLocation(id:string, form: FormGroup): Observable<any> {
    return this.http.put<any>(`${environment.base_url}/api/locations/${id}`, form.getRawValue());
  }

}
