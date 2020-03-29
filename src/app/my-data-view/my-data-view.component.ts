import {Component, Injectable, OnInit} from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Patientdata} from "../models/patientdata.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {CanAuthenticationGuard} from "../authenticationguard/authenticationguard";
import {KeycloakService} from "keycloak-angular";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-my-data-view',
  templateUrl: './my-data-view.component.html',
  styleUrls: ['./my-data-view.component.scss']
})

@Injectable()
export class MyDataViewComponent implements OnInit {
  username: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.username = this.userService.getUsername()
  }
}

