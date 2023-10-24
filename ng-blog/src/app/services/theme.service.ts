import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  isDarkMode(): Observable<boolean> {
    return this.darkModeSubject.asObservable();
  }

  toggleDarkMode() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }
}
