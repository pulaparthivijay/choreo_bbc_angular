import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import urls from 'src/properties';
import { AuthServiceService } from '../auth-service.service';
import { switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    
    public userId:any;
    public userRole:any;
    
    public lati: number | null=null;
    public longi:number | null=null;

    

    constructor(private http:HttpClient , private sharedServices:SharedService, public authService:AuthServiceService ) {
      
      
      this.userId  = sessionStorage.getItem('userData');
    this.userRole = sessionStorage.getItem('userRole');
    console.log(this.userId);
 
    }

    showUser(userId?:any){      
      const showurl= `${urls.checkUser}?id=${userId}`;
   
      return this.http.get(showurl);
    }


    checkUser(userId?:any){
      const showurl= `http://localhost:8080/user/fetchUser/${userId}`;
  
     return this.http.get(showurl);
   }

    showUserForUserProfile(userId?:any){

      const showurl=`${urls.checkUser}?id=${userId}`;

    
      return this.http.get(showurl);
    }

    favVehicle(currentPage:any,pageSize:any){
      
      const favVehUrl= `${urls.getFavouriteCards}?pageNumber=${currentPage}&pageSize=${pageSize}`;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'userId':this.userId
      });
      const options = {headers:headers};
      return this.http.post(favVehUrl,null,options);
    }

  
   

    showDealer(dlrUserId:any){
  
      const showDlrurl= 'https://services-test.keyassure.live/dealer/showDealer';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'd2UserId':dlrUserId
      });
      const options = {headers:headers};
      return this.http.post(showDlrurl,null,options);
    }




   

    uploadProfilePic(file:any){
      console.log(file);
      
 
      const url =`${urls.uploadprofilePic}`;
      
      return this.http.post(url,file);

    }
    updateUserProfile(object:any,user_id:any){

      const url =`${urls.editUser}?id=${user_id}`;

 
      return this.http.post(url,object);
    }

    deleteUserProfile(userId:any){
      
      const url ="https://services-test.keyassure.live/dealer/deletedealer";
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'dealerId':userId
      });
      const options = {headers:headers};
      return this.http.post(url,null,options);
    }
  

    // Get the current location using navigator.geolocation
     getWeatherData(access_token:string) {
     
      

      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(successCallback );

          function successCallback(this: any, position: GeolocationPosition) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Make a request to your server with the latitude and longitude
            const url = `${urls.dash}?lati=${latitude}&longi=${longitude}`;
            
            
            // Make an HTTP request to fetch weather data
            fetch(url
              ,{
              method: 'GET',
              headers:{
                 'Authorization': `Bearer ${access_token}`          
              }
            }
          )
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Resolve the promise with the retrieved weather data

                    console.log(data);
                    
                    resolve(data);
                })
                .catch(error => {
                    // Reject the promise with the error
                    reject(error);
                });
        }


          });
     }

    


           


getWeatherData1(){

  return this.authService.getToken().pipe(
    switchMap((token: string) => {
     
      let access_token="";
       access_token=token;
    
     return this.getWeatherData(access_token);
        
    })
  );
}




}


    


  


   