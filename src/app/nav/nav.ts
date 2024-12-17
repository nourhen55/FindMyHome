import { Component } from '@angular/core';


@Component({
  selector: 'appnav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class NavComponent {
  navLinks = [
    { label: 'Accueil', link: '/accueil' },
    { label: 'Fonctionnalités', link: '/fonctionnalites' },
    { label: 'Contact', link: '/contact' },
    { label: 'Sign-in', link: '/sign-in' },
    { label: 'Privacy Policy', link: '/police' }
  ];

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
