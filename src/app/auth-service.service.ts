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
      Authorization: 'Basic dkNnd1owR3VNRXp0OXF3ZkRPMjVZT0RwTFNFYTpNamhlNnhVX0NZa3BlY3VpeVdwdVFJdll1OHlHMWRraENzWExteFV3cUVRYQ==',
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const body = 'grant_type=client_credentials';

    return this.http.post<any>(url, body, { headers }).pipe(
      map(response => response.access_token)
    );
  }
}