import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs'; // Import Observable
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oidcSecurityService: OidcSecurityService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.oidcSecurityService.getAccessToken().pipe(
      // Use pipe to transform the token into an Observable<HttpEvent<any>>
      switchMap((token: any) => {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${token}`
        );
        const authRequest = request.clone({ headers });
        return next.handle(authRequest);
      })
    );
  }
}
