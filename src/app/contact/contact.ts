import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../services/mess.service';  // Assurez-vous que le service est importé

@Component({
  selector: 'app-contact',
  templateUrl: './conatct.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      // Créez un nouvel objet de message
      const newMessage = {
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        date: new Date().toISOString(),
      };

      // Essayez d'ajouter le message en utilisant le service
      this.messageService.addMessage(newMessage).subscribe(
        (response) => {
          // Message envoyé avec succès
          this.successMessage = 'Message envoyé avec succès!';
          this.errorMessage = '';  // Supprimer le message d'erreur
          this.contactForm.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          // Afficher le message d'erreur en cas d'échec
          console.error('Erreur lors de l\'envoi du message', error);
          this.errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
          this.successMessage = '';  // Supprimer le message de succès
        }
      );
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      this.successMessage = ''; // Supprimer le message de succès si le formulaire est invalide
    }
  }
}
