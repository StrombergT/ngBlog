import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  //Proprties to the form and store form data
  public showForm: boolean = false;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public message: string = '';

  // Function to toggle the visibility of the form
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Function to handle form submission and clear form data after submission
  onSubmit() {
    console.log('Firstname:', this.firstName);
    console.log('Lastname:', this.lastName);
    console.log('E-Mail:', this.email);
    console.log('Message:', this.message);

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }
}
