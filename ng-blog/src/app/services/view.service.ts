import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private currentUserSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('user');

  toggleUser() {
    const currentUser = this.currentUserSubject.value;
    this.currentUserSubject.next(currentUser === 'user' ? 'admin' : 'user');
  }

  getUser(): Observable<string> {
    return this.currentUserSubject.asObservable();
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value === 'admin';
  }
  resetUserStatus() {
    this.currentUserSubject.next('user');
  }
}
