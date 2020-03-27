import {Component, OnInit} from '@angular/core';
import {PatientService} from '../_service/patient.service';
import {PatientModel} from '../_service/api';
import {Router, RouterModule, Routes} from "@angular/router";

@Component({
  selector: 'app-profile-basic-view',
  templateUrl: './profile-basic-view.component.html',
  styleUrls: ['./profile-basic-view.component.scss']
})
export class ProfileBasicViewComponent implements OnInit {

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadPatient();
  }

  elements = {
    gender: "male",
    joblabel: null,
    contact: null
  }

  gender: string;
  patient: PatientModel = {}; //TODO Empty object
  joblabel: number;

  async loadPatient() {
    this.patient = (await this.patientService.getPatient("123")).data;
    // this.gender ="male";
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

  onSubmit() {
    let allAreFilled = true;
    let name = (<HTMLInputElement>document.getElementById("nameInput")).value;
    if (name.length == 0) {
      allAreFilled = false;
    } //TODO eigenen Fehler für no name und andere Felder

    let ageField = (<HTMLInputElement>document.getElementById("ageInput"));
    if (!ageField || !ageField.value) {
      allAreFilled = false;
    }

    //TODO Optionfields, ...

    if (allAreFilled) {
      const url = 'profilecontact';
      this.router.navigateByUrl(url);
      switch (this.elements.contact) {
        case "nocontact":
          this.patient.relatedAttributes.push({Type: "contact", Value: "nocontact"})
          break;
      }
    } else {
      alert("Nicht alle Felder ausgefüllt.")
    }

  }

}
