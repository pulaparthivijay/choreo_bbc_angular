import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import urls from 'src/properties';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private oauthService: OAuthService) {

  }

  getUserData() {
    //D1
    const userId = 'jamesrobert999';
    const password = 'James@123';
   



    const url = 'https://services-test.keyassure.live/user/findUser';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userName': userId,
      'password': password
    });
    const options = { headers: headers };
    return this.http.post(url, null, options);
  }

  getUserId() {
    const url = `${urls.getUserId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  getUserDetails(userId: any) {

    const url = `${urls.getUserDetails}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': userId,
    });
    const options = { headers: headers };
    return this.http.post(url, null, options);
  }

  getUserFromAsguard(accessToken: any, userId: any) {
    console.log(accessToken);
    console.log(userId);
    const getUserUrl = `https://api.asgardeo.io/t/yudhistertech/scim2/Users/${userId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+accessToken
      
    });
    const options = { headers: headers };
    return this.http.get(getUserUrl, options);
  }

  saveUserInDb(userObject:any) {

   
   const userSavingUrl=`${urls.userRegister}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post(userSavingUrl,userObject,options);
  }


 userCount(userId?:any){


 const url= `${urls.usercount}?id=${userId}`;

 return this.http.get(url);
}

  get userName(): string | null {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['username'];
  }
  get id(): string | null {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['sub'];
  }

  get claim(): any {
    const claims = this.oauthService.getIdentityClaims();
    return claims;
  }

  getAccessToken() {
    const accessTokenUrl = `
    https://api.asgardeo.io/t/yudhistertech/oauth2/token?grant_type=client_credentials&scope=internal_user_mgt_view`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': "Basic RzdTQU9HOHBFZmRMVjk1M3R3QkdwSlhJTG1FYTpDMkI1X0tFTE42U0xJdmpnbmZkYkMzSmhNNEV1c1RYckpXRGNtTkd1TlNrYQ==",
    });
    const options = { headers: headers };
    return this.http.post(accessTokenUrl, null, options);
  }

 
  getDropdowns(){
    const dropDowns_url=`${urls.dropDowns}`;
 
     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
       
     });
 
     const options = {headers:headers};
     return this.http.post(dropDowns_url,null,options);
   }

}
