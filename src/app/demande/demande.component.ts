import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demande-status',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  constructor(private router: Router) {}

  // List of requests
  requests = [
    { id: 1, name: 'Studio Moderne', "price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg",status: 'accepted', message: 'Votre demande a été acceptée ! Vous avez 48 heures pour effectuer le paiement afin de confirmer votre réservation.' },
    { id: 2, name: 'Appartement Luxe',"price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg", status: 'refused', message: 'Nous regrettons de vous informer que votre demande a été refusée.' },
    { id: 3, name: 'Maison Familiale',"price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg", status: 'refused', message: 'Nous regrettons de vous informer que votre demande a été refusée.' },
    { id: 4, name: 'Studio à Paris', "price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg",status: 'refused', message: 'Nous regrettons de vous informer que votre demande a été refusée.' },
    { id: 5, name: 'Appartement à Lyon',"price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg", status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' },
    { id: 6, name: 'Chambre à Louer', "price": 250,
      "type": "S+1",
      "image": "assets/home2.jpg",status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' },
    { id: 7, name: 'Loft dans le Centre', status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' },
    { id: 8, name: 'Maison de Campagne', status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' },
    { id: 9, name: 'Appartement Bord de Mer', status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' },
    { id: 10, name: 'Penthouse à Paris', status: 'pending', message: 'Votre demande est actuellement en attente. Veuillez patienter.' }
  ];

  // Function to navigate to the payment page when accepted
  navigateToPayment(requestId: number): void {
    // Navigate to a payment page (assuming the route is '/payment')
    this.router.navigate(['/payment', requestId]);
  }
  deleteRequest(requestId: number) {
    this.requests = this.requests.filter(request => request.id !== requestId);
    // Optionally, add a service call here to delete the request from the backend
  }
}
