import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropService {
  private jsonUrl = 'assets/bd/maison.json';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les données des propriétés
  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
