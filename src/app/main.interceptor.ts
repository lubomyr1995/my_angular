import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, switchMap} from 'rxjs/operators'
import {Observable, throwError} from 'rxjs';
import {AuthService} from "./services";
import {Router} from "@angular/router";
import {IToken} from "./interfaces";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.authService.isAuthenticated();
    if (isAuthenticated) {
      request = this.addToken(request, this.authService.getAccessToken())
    }

    // @ts-ignore
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next)
        }
        return throwError(() => new Error('token invalid or expired'))
      })
    )
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    })
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true

      return this.authService.refresh().pipe(
        switchMap((tokens) => {
          return next.handle(this.addToken(request, tokens.access))
        }),
        catchError(() => {
          this.isRefreshing = false
          this.authService.delToken();
          this.router.navigate(['login']).then()
          return throwError(() => new Error('token invalid or expired'))
        })
      )
    }
  }
}
