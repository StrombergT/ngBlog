import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @HostBinding('class.dark') isDarkMode: boolean = false;
  imagePath: string = 'assets/herobg.png';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode().subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
