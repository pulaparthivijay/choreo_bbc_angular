import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    const url = 'https://api.asgardeo.io/t/vijaytech/oauth2/token';
    const headers = {
      Authorization: 'Basic SFlVT3NRWGpJZlhWMjlWSVZ1RDJORjhma2VzYTpCa2pWZGRnaGV4V0t4aU93RjY3TzRSNXQ2ZWxwQ1AzOGpLZlJHXzVsQUdVYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}