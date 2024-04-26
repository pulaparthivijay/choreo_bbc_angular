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
      Authorization: 'Basic U1A2M2pEdFM0Q1BDMUNMWWNWdlFjQ19md1N3YTpfZk9yY0hXMHNDUDM4T3lXVzhPbHd0dFlhRWIxYjJXOVZDa2tycnRMNFJBYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}