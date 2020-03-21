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

  toggleActiveStatus(event) {
    var targetLabel: HTMLElement = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }

}
