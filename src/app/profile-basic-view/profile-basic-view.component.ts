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
  elements ={
    gender:"male",
    joblabel:null,
    contact:null
  }

  gender:string;
  patient: PatientModel;
  joblabel:number;
  async loadPatient(){
    this.patient = (await this.patientService.getPatient("123")).data  
    // this.gender ="male";
    console.log(this.patient);
    
  }

  onSubmit(){

    switch(this.elements.contact){
      case "nocontact":
        this.patient.relatedAttributes.push({Type:"contact", Value:"nocontact"})
        break;
        
    }

  }

}
