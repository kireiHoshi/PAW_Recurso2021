import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.base_url}/api/users`);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.base_url}/api/users/${id}`);
  }

  editProfile(id: string, form: FormGroup): Observable<any> {
    return this.http.put<any>(`${environment.base_url}/api/users/${id}`, form.getRawValue());
  }

}
