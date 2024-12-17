import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getHomes(): Observable<any[]> {
    return this.http.get<any[]>('assets/bd/maison.json');
  }
}
