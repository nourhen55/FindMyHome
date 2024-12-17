import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign.html',
  styleUrls: ['./sign.css'],
})
export class SignInComponent {
  userType: string = ''; // locateur ou recherche
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.userType) {
      this.message = 'Veuillez sélectionner un type d’utilisateur.';
      return;
    }

    // Déterminer le fichier JSON à utiliser
    const jsonFile =
      this.userType === 'locateur'
        ? 'assets/bd/locateur.json'
        : 'assets/bd/etudient.json';

    // Lire et chercher les données
    this.http.get<any>(jsonFile).subscribe(
      (data) => {
        let users = this.userType === 'locateur' ? data.locateur : data.etudiants;

        // Vérifier si l'utilisateur existe
        const user = users.find(
          (u: any) => u.email === this.email && u.password === this.password
        );

        if (user) {
          this.message = `Bienvenue, ${user.prenom}! Connexion réussie.`;
        } else {
          this.message = 'Identifiants incorrects ou utilisateur introuvable.';
        }
        
      },
      (error) => {
        console.error('Erreur lors de la lecture du fichier JSON', error);
        this.message = 'Erreur technique. Veuillez réessayer plus tard.';
      }
    );
  }
}
