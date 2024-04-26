import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urls from 'src/properties';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {


  public userId:any;
  public userRole:any;
    constructor(private http:HttpClient) {
      this.userId =sessionStorage.getItem('userData');
      this.userRole =sessionStorage.getItem('userRole');
    }

    getMyPurchaseCards(currentPage:any,pageSize:any){
        
        const url= `${urls.shipmentGetPurCarCards}?pageNo=${currentPage}&pageSize=${pageSize}`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'id':this.userId
        });
        const options = {headers:headers};
        return this.http.post(url,null,options);
      };
    
      getMySalesCards(currentPage:any,pageSize:any){
        
        const url =`${urls.shipmentGetSoldCarCards}?pageNo=${currentPage}&pageSize=${pageSize}`;
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'id':this.userId
        });
        const options = {headers:headers};
        return this.http.post(url,null,options);
      }

      mailAttach(offerId:any, mailId:any){        
        const params:HttpParams = new HttpParams().set('offerId',offerId).set('mailId', mailId);
        
        const url=`http://localhost:8082/shipment/attachDocsInMail?${params.toString()}`
        return this.http.post(url,null);
      }

}    