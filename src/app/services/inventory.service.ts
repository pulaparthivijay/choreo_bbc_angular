import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import urls from 'src/properties';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public userData!:any
  public userId:any;

  constructor(private http:HttpClient, private sharedServices:SharedService) { 
    
    
    const userID= sessionStorage.getItem('userData');
    this.userId=userID;
    console.log(userID);
  }


  

  getInventoryCards(currentPage: any, pageSize: any): Observable<any> {
    
    const url = `${urls.getInventoryCards}?pageNumber=${currentPage}&pageSize=${pageSize}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });
    const options = { headers: headers };
    return this.http.post(url, null, options);
  }


  getSearchFtryCards(currentPage: any, pageSize: any): Observable<any> {
    
    const searchFactoryUrl = `${urls.getSearchFactory}?pageNumber=${currentPage}&pageSize=${pageSize}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Id': this.userId
    });
    const options = { headers: headers };
    return this.http.post(searchFactoryUrl, null, options);
  }

  getMoveToWishList(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });
    const options = { headers: headers };
    const params: HttpParams = new HttpParams().set('apprRef', id);    
    const moveToWishListUrl = `${urls.moveToWishList}?${params.toString()}`;
    return this.http.post(moveToWishListUrl, null, options);
  }

  removeFromFav(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });
    const options = { headers: headers };
    const params: HttpParams = new HttpParams().set('apprId', id);    
    const moveToWishListUrl = `${urls.removeFavorite}?${params.toString()}`;
    return this.http.post(moveToWishListUrl, null, options);
  }

  carBuyByBuyer(id: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'buyerUser_id': this.userId,
      
    });
    const options = { headers: headers };
    const params: HttpParams = new HttpParams().set('appr_id', id);    
    const buycarUrl = `${urls.buyCar}?${params.toString()}`;
    return this.http.post(buycarUrl,null,options);
  }

 

 

 
  getDropDownsForInventoryFilter(filterObject: any, tabModule: any) {
    console.log(tabModule);
    
    let module: any;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });
    const options = { headers: headers };
    if (tabModule === 'Inventory') {
      module = 'inventory';
    } else if (tabModule === 'Search Factory') {
      module = 'SearchTheFactory';
    }
    console.log(module);
    
    
    const params = new HttpParams().set('module', module)    
    const url = `${urls.filterDropDown}?${params.toString()}`
    return this.http.post(url, filterObject, options);
  }

  getFilteredInvCards(currentPage: any, pageSize: any, object: any) {

    let params = new HttpParams();

    params = params.append('pageNo', String(currentPage)); // Using append for the first parameter
    params = params.append('pageSize', String(pageSize));
   
    const url = `${urls.inventoryFilter}?${params.toString()}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });

    const options = { headers: headers };

    return this.http.post(url, object, options)
  }

  getFilteredSearchCards(currentPage: any, pageSize: any, object: any) {

    let params = new HttpParams();

    params = params.append('pageNo', String(currentPage)); 
    params = params.append('pageSize', String(pageSize));
    
    const url = `${urls.searchFactoryFilter}?${params.toString()}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'userId': this.userId
    });

    const options = { headers: headers };

    return this.http.post(url, object, options)
  }


}
