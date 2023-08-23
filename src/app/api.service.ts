import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // ...

  registerWithFacebook(accessToken: string): Observable<any> {
    const url = `${this.apiURL}/auth/register/facebook`;
    return this.http.post(url, { accessToken });
  }

  registerWithGoogle(): Observable<any> {
    const googleOAuthProxyUrl = 'http://localhost:3000/google-oauth-proxy';
    return this.http.get(googleOAuthProxyUrl);
  }
}


