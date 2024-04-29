import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    const url = 'https://api.asgardeo.io/t/yudhistertech/oauth2/token';
    const headers = {
      Authorization: 'Basic Y0pmT3k1emxNUEhpWkFUUUlGWnBIQmNUQnkwYTpfU1Z1U1ZtQW13SkVtT25uazE2TnZmb2tQbzYxQ0lsMUhvaVlHVVdjajVRYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}