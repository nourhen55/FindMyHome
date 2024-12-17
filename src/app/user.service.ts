import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/register';  // Make sure this matches your backend URL

  constructor(private http: HttpClient) {}

  // Method to check if CIN exists
  checkCIN(cin: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?cin=${cin}`);
  }

  // Method to register the user
  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);  // Make sure POST is being sent
  }
}
