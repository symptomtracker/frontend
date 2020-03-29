import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login-logout-button',
  templateUrl: './login-logout-button.component.html',
  styleUrls: ['./login-logout-button.component.scss']
})
export class LoginLogoutButtonComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.checkLogin().then(b => {
      this.isLoggedIn = b;
    });
    this.username = this.userService.getUsername();
  }

  logout() {
    return this.userService.logout();
  }

  login() {
    return this.userService.login();
  }
}
