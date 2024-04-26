import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
// Assuming AuthService handles token retrieval





@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url);
    

    if(request.url.includes('/dropDowns') ||request.url.includes('/userCount') ||request.url.includes('/fetchUser') ||
    request.url.includes('/addAppraiseVehicle') ||request.url.includes('/deleteAppraisal') ||request.url.includes('/getweatherinfo') ||
    request.url.includes('/getFavoriteCards') ||request.url.includes('/apprList') ||request.url.includes('/checkVehicleAvailable')
    ||request.url.includes('/moveToInventory') ||request.url.includes('/moveToWishList') ||request.url.includes('/removeFavorite') ||request.url.includes('/sendingEmail')
    ||request.url.includes('/showToUi') ||request.url.includes('/updateAppraiseVehicle') ||request.url.includes('/updateDraftAppraiseVehicle') ||request.url.includes('/uploadImage')
    ||request.url.includes('/getInventoryCards') ||request.url.includes('/getSearchFactory') ||request.url.includes('/buyCar') ||request.url.includes('/getPurCarCards') ||request.url.includes('/getSoldCarCards')
    ||request.url.includes('/getUser') ||request.url.includes('/showUser') ||request.url.includes('/addUser') ||request.url.includes('/editUser') ||request.url.includes('/uploadProPic') ||request.url.includes('/downloadImage')
    ){
      return this.authService.getToken().pipe(
        switchMap((token: string) => {
          // Clone the request and add the obtained token to the headers
          const authReq = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          // Pass the cloned request to the next handler
          return next.handle(authReq);
        })
      );
    }

    return next.handle(request);
   
  }
}
