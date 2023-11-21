import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private currentUserSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('user');

  // Function to toggle between 'user' and 'admin' user statuses and get the current user status from the BehaviorSubject
  toggleUser() {
    const currentUser = this.currentUserSubject.value;
    this.currentUserSubject.next(currentUser === 'user' ? 'admin' : 'user');
  }

  // Function to get an Observable of the current user status
  getUser(): Observable<string> {
    return this.currentUserSubject.asObservable();
  }

  // Function to check if the current user status is 'admin'
  isAdmin(): boolean {
    return this.currentUserSubject.value === 'admin';
  }

  // Function to reset the user status to 'user'
  resetUserStatus() {
    this.currentUserSubject.next('user');
  }
}
