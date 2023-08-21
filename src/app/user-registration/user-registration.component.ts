import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Make sure to import the correct service

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  user = { email: '', password: '' };

  constructor(private apiService: ApiService) {}

  registerUser() {
    this.apiService.registerUser(this.user).subscribe(response => {
      console.log('User registered:', response);
      // Add code to handle successful registration or error
    });
  }
}
