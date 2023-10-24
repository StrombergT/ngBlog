import { Injectable } from '@angular/core';

class UserView {
  Admin = 'admin';
  User = 'user';
}

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private currentUser: string;

  constructor() {
    this.currentUser = 'user';
  }

  toggleUser() {
    this.currentUser = this.currentUser === 'user' ? 'admin' : 'user';
  }

  getUser(): string {
    return this.currentUser;
  }
}
