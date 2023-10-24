import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ViewService } from './services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') get darkMode() {
    return this.themeService.isDarkMode();
  }

  currentUserStatus: string = '';

  constructor(
    public themeService: ThemeService,
    public viewService: ViewService
  ) {
    this.currentUserStatus = this.viewService.getUser();
  }

  toggleUserChoice() {
    this.viewService.toggleUser();
    this.currentUserStatus = this.viewService.getUser();
  }

  ngOnInit() {
    this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
