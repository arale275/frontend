import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  // Implement other authentication-related methods
}
