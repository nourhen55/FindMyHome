import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocateurService } from '../services/locateur.service';

@Component({
  selector: 'app-locateur',
  templateUrl: './locateur.component.html',
  styleUrls: ['./locateur.component.css']
})
export class LocateurComponent implements OnInit {
  locateurForm!: FormGroup;
  cinExists: boolean = false;
  passwordMismatch: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private locateurService: LocateurService) {}

  ngOnInit(): void {
    this.locateurForm = this.fb.group({
      cin: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // Vérifier l'existence du CIN
  checkCin(): void {
    const cin = this.locateurForm.get('cin')?.value;
    if (cin) {
      this.locateurService.checkCinExists(cin).subscribe(
        (exists) => {
          this.cinExists = exists;
          this.errorMessage = exists ? 'CIN déjà utilisé.' : '';
        },
        (error) => {
          console.error('Erreur lors de la vérification du CIN', error);
          this.errorMessage = 'Erreur lors de la vérification du CIN.';
        }
      );
    }
  }

  onSubmit(): void {
    const { password, confirmPassword } = this.locateurForm.value;

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      this.passwordMismatch = true;
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.passwordMismatch = false;

    if (this.locateurForm.valid && !this.cinExists) {
      this.locateurService.addStudent(this.locateurForm.value).subscribe(
        (response) => {
          console.log('Locateur ajouté avec succès', response);
          this.successMessage = 'Locateur ajouté avec succès !';
          this.errorMessage = '';
          this.locateurForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du locateur', error);
          this.errorMessage = 'Erreur lors de l\'ajout. Veuillez réessayer.';
        }
      );
    }
  }
}
