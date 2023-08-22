import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    public router: Router,
    public oidcSecurityService: OidcSecurityService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const { isAuthenticated, userData, accessToken, idToken, configId } =
          loginResponse;
        console.log('Authentication status:', isAuthenticated);
      });
  }

  login() {
    this.oidcSecurityService.authorize();
    console.log('Login button clicked');
  }

  logout() {
    this.oidcSecurityService
      .logoff()
      .subscribe((result) => console.log('Logout result:', result));
    console.log('Logout button clicked');
  }

  loginWithGoogle(): void {
    this.oidcSecurityService.authorize(); // Redirect to Google login page
  }

  loginWithFacebook(): void {
    this.oidcSecurityService.authorize(); // Redirect to Facebook login page
  }
}
