import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  studentCount: number = 0;
  landlordCount: number = 0;
  houseCount: number = 0;
  messageCount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts(): void {
    this.http.get<any>('assets/bd/etudient.json').subscribe(
      (data: { etudiants: any[] }) => {
        this.studentCount = data.etudiants.length;
      },
      error => {
        console.error('Erreur lors de la récupération des étudiants :', error);
      }
    );

    this.http.get<any>('assets/bd/locateur.json').subscribe(
      (data: { locateur: any[] }) => {
        this.landlordCount = data.locateur.length;
      },
      error => {
        console.error('Erreur lors de la récupération des locateurs :', error);
      }
    );

    this.http.get<any>('assets/bd/messages.json').subscribe(
      (data: { messages: any[] }) => {
        this.messageCount = data.messages.length;
      },
      error => {
        console.error('Erreur lors de la récupération des messages :', error);
      }
    );

    this.http.get<any[]>('assets/bd/maison.json').subscribe(
      data => {
        this.houseCount = data.length;
      },
      error => {
        console.error('Erreur lors de la récupération des maisons :', error);
      }
    );
  }
}
