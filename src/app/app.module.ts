import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { AuthInterceptor } from './auth.interceptor'; // Import the AuthInterceptor

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

@NgModule({
  declarations: [AppComponent, AuthCallbackComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule.forRoot({
      config: {
        authority: 'http://localhost:3000/google-oauth-proxy',
        redirectUrl: 'http://localhost:4200',
        postLogoutRedirectUri: 'http://localhost:4200',
        clientId:
          '274409989970-mg4rboqgh3ghr17pdiu9056m6o1fg072.apps.googleusercontent.com',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Add the AuthInterceptor
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Update this URL
