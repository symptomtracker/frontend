import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(
    protected keycloakAngular: KeycloakService
  ) { }

  getUsername(): string {
    try {
      return this.keycloakAngular.getUsername();
    } catch (e){
      console.log('Failed to load user name');
      return null!!;
    }
  }

  async checkLogin(): Promise<boolean> {
    try {
      return await this.keycloakAngular.isLoggedIn();
    } catch (e) { }
  }

  login(){
    return this.keycloakAngular.login();
  }

  logout() {
    return this.keycloakAngular.logout(window.location.origin + '/home');
  }
}
