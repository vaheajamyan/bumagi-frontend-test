import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  private handleError(error: HttpErrorResponse) {
    if (!environment.production) {
      console.error(error);
    }
    return throwError(error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      headers: !!localStorage.getItem('token') && req.headers.set('Authorization', localStorage.getItem('token'))
    });
    return next.handle(clone)
      .pipe(
        catchError((e) => this.handleError(e))
      );
  }
}
