import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-callback',
  template: 'Callback in progress...',
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Extract token or user information from URL query parameters
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token !== null) {
      // Store token or user information in authentication service
      this.authService.setToken(token);

      // Redirect to a secured route or home page
      // Example: this.router.navigate(['/secured']);
    } else {
      // Handle the case where token is null
      console.error('Token is null.');
      // Redirect to an error page or display a message
    }
  }
}
