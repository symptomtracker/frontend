import { Component, OnInit } from '@angular/core';
import { PatientService } from '../_service/patient.service';
import { PatientModel } from '../_service/api';

@Component({
  selector: 'app-profile-basic-view',
  templateUrl: './profile-basic-view.component.html',
  styleUrls: ['./profile-basic-view.component.css']
})
export class ProfileBasicViewComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.loadPatient();
  }
  patient: PatientModel;
  async loadPatient(){
    this.patient = (await this.patientService.getPatient(123)).data  
    console.log(this.patient);
    
  }

}
