import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComptService {
  private readonly comptUrl = '/bd/compt.json'; // URL for user data

  constructor(private http: HttpClient) {}

  // Function to validate login
  validateLogin(email: string, password: string): Observable<string> {
    return this.http.get<any[]>(this.comptUrl).pipe(
      map((data) => {
        const user = data.find(u => u.email === email && u.password === password);
        if (user) {
          return 'Connexion réussie !'; // Success message
        } else {
          return 'Email ou mot de passe incorrect.'; // Error message
        }
      })
    );
  }
}
