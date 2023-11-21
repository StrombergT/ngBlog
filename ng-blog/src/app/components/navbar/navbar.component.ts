import { Component, OnInit } from '@angular/core';

import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUserStatus: string = 'user';
  isMobileMenuOpen = false;

  constructor(public viewService: ViewService) {}

  ngOnInit() {
    this.viewService.getUser().subscribe((userStatus) => {
      // Subscribe to the getUser observable in ViewService
      // Update currentUserStatus whenever the user status changes
      this.currentUserStatus = userStatus;
    });
  }

  // toggle the user choice (admin/user)
  toggleUserChoice() {
    this.viewService.toggleUser(); // Toggle the user status using ViewService
    if (!this.viewService.isAdmin()) {
      // Reset user status if the current user is not an admin
      this.viewService.resetUserStatus();
    }
  }
  // toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
