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
  }

  isHidden: boolean = true;

  handleMenu(event: Event): void {
    event.preventDefault();
    this.isHidden = !this.isHidden;
  }
}
