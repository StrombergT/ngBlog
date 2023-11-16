import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public showForm: boolean = false;
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public message: string = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

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
