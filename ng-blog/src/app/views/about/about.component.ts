import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public showForm: boolean = false;
  public formData: any = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  formFields = [
    { id: 'firstName', label: 'Name', type: 'text', name: 'firstName' },
    { id: 'lastName', label: 'Last Name', type: 'text', name: 'lastName' },
    { id: 'email', label: 'E-Mail', type: 'email', name: 'email' },
    { id: 'message', label: 'Message', type: 'text', name: 'message' },
  ];

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    console.log(this.formData);
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  }
}
