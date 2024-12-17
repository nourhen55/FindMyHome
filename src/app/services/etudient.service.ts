// student.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  host: string = 'http://localhost:3001/etudiants/'; // Backend URL

  constructor(private http: HttpClient) {}

  // Check if student with the given CIN exists
  checkCinExists(cin: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.host}checkCin/${cin}`);
  }

  // Add student data
  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.host, student);
  }
}

