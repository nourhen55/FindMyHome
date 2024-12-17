import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private etudientUrl = 'assets/bd/etudient.json';
  private locateurUrl = 'assets/bd/locateur.json';

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<any> {
    return this.http.get(this.etudientUrl);
  }

  getLocateurs(): Observable<any> {
    return this.http.get(this.locateurUrl);
  }
}
