import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oublie',
  templateUrl: './oublie.component.html',
  styleUrls: ['./oublie.component.css']
})
export class OublieComponent {
  userType: string = ''; 
  email: string = '';
  cin: string = '';  
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.userType) {
      this.message = 'Veuillez sélectionner un type d’utilisateur.';
      return;
    }

    const jsonFile =
      this.userType === 'locateur'
        ? 'assets/bd/locateur.json'
        : 'assets/bd/etudient.json';

    this.http.get<any>(jsonFile).subscribe(
      (data) => {
        // Log data to ensure it is correctly fetched
        console.log('Data received:', data);

        const users = this.userType === 'locateur' ? data.locateur : data.etudiants;

        if (!users) {
          this.message = 'Données utilisateur non trouvées dans le fichier JSON.';
          return;
        }

        // Trim input and compare
        const user = users.find(
          (u: any) => u.email.trim().toLowerCase() === this.email.trim().toLowerCase() && u.cin.trim() === this.cin.trim()
        );

        if (user) {
          this.message = `Votre mot de passe est : ${user.password}`;
        } else {
          this.message = 'Utilisateur introuvable ou informations incorrectes.';
        }
      },
      (error) => {
        console.error('Erreur lors de la lecture du fichier JSON', error);
        this.message = 'Erreur technique. Veuillez réessayer plus tard.';
      }
    );
  }
}
