import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/etudient.service'; // Import the service

@Component({
  selector: 'app-etud',
  templateUrl: './etud.component.html',
  styleUrls: ['./etud.component.css'],
})
export class EtudComponent implements OnInit {
  etudiantForm!: FormGroup;
  cinExists: boolean = false; // Flag to track if CIN exists
  successMessage: string = '';  // Success message for adding student
  errorMessage: string = '';    // Error message for failed submission

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  ngOnInit(): void {
    this.etudiantForm = this.fb.group({
      cin: ['', Validators.required], // Champ obligatoire
      prenom: ['', Validators.required], // Champ obligatoire
      email: ['', [Validators.required, Validators.email]], // Email valide obligatoire
      phone: [''], // Champ facultatif
      cartepancreas: [''], // Champ facultatif
      password: ['', [Validators.required, Validators.minLength(6)]], // Min. 6 caractères
      confirmPassword: ['', Validators.required], // Confirmation obligatoire
    });
  }

  // Check if CIN already exists
  checkCin(): void {
    const cin = this.etudiantForm.get('cin')?.value;
    if (cin) {
      this.studentService.checkCinExists(cin).subscribe(
        (exists) => {
          this.cinExists = exists;
          if (this.cinExists) {
            this.errorMessage = 'CIN already exists. Please use a different CIN.';
          } else {
            this.errorMessage = ''; // Clear error message if CIN is valid
          }
        },
        (error) => {
          console.error('Error checking CIN', error);
          this.errorMessage = 'Error checking CIN. Please try again later.';
        }
      );
    }
  }

  onSubmit(): void {
    // Check CIN existence before submission
    this.checkCin();

    // Wait until CIN check is completed
    if (this.etudiantForm.valid && !this.cinExists) {
      console.log('Formulaire soumis avec succès', this.etudiantForm.value);

      // Extract form data
      const studentData = this.etudiantForm.value;

      // Call the StudentService to send data to the backend
      this.studentService.addStudent(studentData).subscribe(
        (response) => {
          console.log('Student added successfully', response);
          this.successMessage = 'Student added successfully!';
          this.etudiantForm.reset(); // Optionally reset the form after successful submission
        },
        (error) => {
          console.error('Error adding student', error);
          this.errorMessage = 'Error adding student. Please try again later.';
        }
      );
    } else if (this.cinExists) {
      console.error('CIN already exists!');
      this.errorMessage = 'CIN already exists. Please use a different CIN.';
    } else {
      console.error('Formulaire invalide');
      this.errorMessage = 'Form is invalid. Please correct the errors and try again.';
    }
  }
}
