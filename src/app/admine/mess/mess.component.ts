import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesData } from '../../modele/message.model';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {
  messages: any[] = [];  // Declare the messages array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load the messages from the JSON file
    this.http.get<MessagesData>('assets/bd/messages.json').subscribe(data => {
      this.messages = data.messages.map(message => ({
        ...message,
        isExpanded: false,  // Add isExpanded to each message
      }));
    });
  }

  toggleMessage(id: string): void {
    const message = this.messages.find(msg => msg.id === id);
    if (message) {
      message.isExpanded = !message.isExpanded;
    }
  }
}
