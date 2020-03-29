import { Injectable } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import globalAxios from 'axios';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(
    protected keycloakAngular: KeycloakService
  ) {
    this.addAxiosInterceptor();
  }

  getUsername(): string {
    try {
      return this.keycloakAngular.getUsername();
    } catch (e){
      console.log('Failed to load user name');
      return null!!;
    }
  }

  async getToken(): Promise<string> {
    try {
      return await this.keycloakAngular.getToken();
    } catch (e) { }
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

  addAxiosInterceptor() {
    globalAxios.interceptors.request.use(async (config) => {
      const token = await this.getToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      console.log(JSON.stringify(config));

      return config;
    },  (error) => {
      // Do something with request error
      return Promise.reject(error);
    });
  }
}
