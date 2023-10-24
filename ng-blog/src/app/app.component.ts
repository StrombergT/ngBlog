import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ViewService } from './services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') isDarkMode: boolean = false;
  currentUserStatus: string = 'user';

  constructor(
    public themeService: ThemeService,
    public viewService: ViewService
  ) {}

  ngOnInit() {
    this.viewService.getUser().subscribe((userStatus) => {
      this.currentUserStatus = userStatus;
    });

    this.themeService.isDarkMode().subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

  toggleUserChoice() {
    this.viewService.toggleUser();
  }
}
