import {Component, Injectable, OnInit} from '@angular/core';
import {PatientService} from '../_service/patient.service';
import {PatientModel} from '../_service/api';
import {Router, RouterModule, Routes} from "@angular/router";
import {Observable} from "rxjs";
import {Patientdata} from "../models/patientdata.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import * as PatientdataActions from '../actions/patientdata.actions'

@Component({
  selector: 'app-profile-basic-view',
  templateUrl: './profile-basic-view.component.html',
  styleUrls: ['./profile-basic-view.component.scss']
})

@Injectable()
export class ProfileBasicViewComponent implements OnInit {
  patientdata: Observable<Patientdata[]>


  constructor(
    private patientService: PatientService,
    private router: Router,
    private store: Store<AppState>) {
    this.patientdata = store.select('patientdata')
  }

  ngOnInit(): void {
    this.loadPatient();
    console.log("PATIENTDATA")
    console.log(this.patientdata)
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
    // this.patient = (await this.patientService.getPatient("123")).data;
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
    this.addData("Testname", 99, "Weiblich", "Ich arbeite derzeit von zu Hause", "wenig Kontakt")
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

  addData(name, alter, geschlecht, berufsfeld, menschenkontakt) {
    this.store.dispatch(new PatientdataActions.AddPatientdata({name, alter, geschlecht, berufsfeld, menschenkontakt}))
  }

}
