import { Component, OnInit } from '@angular/core';

import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUserStatus: string = 'user';

  constructor(public viewService: ViewService) {}

  ngOnInit() {
    this.viewService.getUser().subscribe((userStatus) => {
      this.currentUserStatus = userStatus;
    });
  }

  toggleUserChoice() {
    this.viewService.toggleUser();
    if (!this.viewService.isAdmin()) {
      // Reset user status and hide the New Post component
      this.viewService.resetUserStatus();
    }
  }
}
