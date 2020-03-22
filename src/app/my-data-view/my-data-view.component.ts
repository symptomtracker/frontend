import { Component, OnInit } from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";

@Component({
  selector: 'app-my-data-view',
  templateUrl: './my-data-view.component.html',
  styleUrls: ['./my-data-view.component.css']
})
export class MyDataViewComponent implements OnInit {

  constructor(
    private patientService:PatientService
  ) { }

  ngOnInit(): void {
    this.loadPatient()
  }

  patient: PatientModel;
  async loadPatient() {
    this.patient = (await this.patientService.getPatient("0")).data;
    console.log(this.patient);
  }
}

