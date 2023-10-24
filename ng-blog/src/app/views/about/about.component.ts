import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // Variabler för formuläret
  public showForm: boolean = false;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public message: string = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Funktion som körs när formuläret skickas in
  onSubmit() {
    // Skriv ut informationen i konsolen
    console.log('Förnamn:', this.firstName);
    console.log('Efternamn:', this.lastName);
    console.log('E-post:', this.email);
    console.log('Meddelande:', this.message);

    // Återställ formulärfälten efter skickande
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }
}
