import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogoutButtonComponent } from './login-logout-button.component';
import {KeycloakService} from "keycloak-angular";

describe('LoginLogoutButtonComponent', () => {
  let component: LoginLogoutButtonComponent;
  let fixture: ComponentFixture<LoginLogoutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLogoutButtonComponent ],
      providers: [ KeycloakService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
