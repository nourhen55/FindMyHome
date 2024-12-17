import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/acc.service'; // Adjust the import if needed

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  etudiants: any[] = [];
  locateurs: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Get Etudiants Data
    this.dataService.getEtudiants().subscribe(data => {
      this.etudiants = data.etudiants;  // Ensure you're accessing the correct key in the response
    });

    // Get Locateurs Data
    this.dataService.getLocateurs().subscribe(data => {
      this.locateurs = data.locateur;  // Ensure you're accessing the correct key in the response
    });
  }
  deleteEtudiant(id: string) {
    this.etudiants = this.etudiants.filter(etudiant => etudiant.id !== id);
  }
  
  deleteLocateur(id: string) {
    this.locateurs = this.locateurs.filter(locateur => locateur.id !== id);
  }
  
}

