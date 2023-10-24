import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode: boolean;

  constructor() {
    this.darkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
