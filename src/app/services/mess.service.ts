import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private host: string = 'http://localhost:3007/messages'; // Endpoint for storing messages
  private apiUrl: string = 'assets/bd/messages.json';  // Path to JSON file for loading messages

  constructor(private http: HttpClient) {}

  // Add a new message
  addMessage(newMessage: any): Observable<any[]> {
    return this.http.post<any[]>(this.host, newMessage); // POST request to /messages endpoint
  }

  // Load existing messages from the server
  loadMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.host); // GET request to /messages endpoint
  }

  // Fetch messages from the JSON file
  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // GET request to load messages from the JSON file
  }
}
