import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenreq = req.clone({
      setHeaders: {
        Authorization:'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenreq);
  }
  constructor() { }
}
