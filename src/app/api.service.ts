import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL = 'http://localhost:3000'; // Replace with your Express.js server URL
  constructor(private http: HttpClient) {}

  getSomeData() {
    return this.http.get(`${this.apiURL}/some-endpoint`);
  }

  postSomeData(data: any) {
    return this.http.post(`${this.apiURL}/some-endpoint`, data);
  }

  registerUser(user: any) {
    return this.http.post(`${this.apiURL}/register`, user); // Corrected apiUrl to apiURL
  }
  generateReport() {
    return this.http.get(`${this.apiURL}/generate-report`);
  }

  // Define the submitCharacterization method
  submitCharacterization(characterizationData: any) {
    return this.http.post(
      `${this.apiURL}/submit-characterization`,
      characterizationData
    );
  }
}
