import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                  // client-side error
                  errorMessage = `client-side Error: ${error.error.message}`;
                } else {
                  // server-side error
                  errorMessage = `server-side error Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                window.alert("HttpErrorInterceptor===>"+errorMessage);
                //rollbar.error(error)
                return throwError(errorMessage);
              }) 
        );
    }
}

@Injectable()
export class HttpGetInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(request.method=='GET'){
        const customRequest = request.clone({
          headers: new HttpHeaders({
            'Cache-Control': 'no-cache11',
            'Pragma': 'no-cache111',
            'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
          })
        });
        //return next.handle(customRequest);
      }  
      return next.handle(request);
    }
}