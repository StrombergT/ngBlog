import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // Properties for the form and store form data
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
    // Create an object to represent the form data
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message,
    };

    // Log the form data as an object
    console.log(formData);

    // Clear form fields after submission
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }
}
