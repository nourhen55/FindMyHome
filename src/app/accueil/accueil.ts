import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil', // Préfixe "app-" conventionnel pour un composant Angular
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css'],
})
export class AccueilComponent {
  isMenuActive: boolean = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}