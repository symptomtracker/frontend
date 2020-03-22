import { Component, OnInit } from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-data-view',
  templateUrl: './my-data-view.component.html',
  styleUrls: ['./my-data-view.component.css']
})
export class MyDataViewComponent implements OnInit {

  id: string;

  constructor(
    private patientService:PatientService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
    this.loadPatient(this.id)
  }

  patient: PatientModel;
  async loadPatient(id) {
    this.id = '5e77416a0d65ff16cc8ed426';
    this.patient = (await this.patientService.getPatient(id)).data;
  }
}

