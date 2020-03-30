import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {PatientService} from '../_service/patient.service';
import {PatientModel} from '../_service/api';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Patientdata} from "../models/patientdata.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import * as PatientDataActions from '../actions/patientdata.actions'
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-basic-view',
  templateUrl: './profile-basic-view.component.html',
  styleUrls: ['./profile-basic-view.component.scss']
})

@Injectable()
export class ProfileBasicViewComponent implements OnInit {
  patientData: Observable<Patientdata[]>;

  @ViewChild("f", {static:false})
  public form;

  public hasFormBeenSubmitted: boolean = false;

  constructor(
    private patientService: PatientService,
    private router: Router,
    private store: Store<AppState>) {
    this.patientData = store.select('patientdata');
  }

  ngOnInit(): void {
    this.loadPatient();
    console.log("PATIENTDATA");
    console.log(this.patientData)
  }
  //TODO Variablenames
  gender = ""; //Gender will be assigned, if any Radio Button is checked
  field = "";
  contact = "";

  patient: PatientModel = {}; //TODO Empty object

  async loadPatient() {
    // this.patient = (await this.patientService.getPatient("123")).data;
    // this.gender ="male";
    //console.log(this.patient);

  }

  /**
   * Sets the clicked gender to the gender variable and makes the radio button clicked
   * @param event Toggle event
   */
  toggleActiveStatus(event) {
    let targetLabel: HTMLElement = <HTMLElement>event.target;
    this.gender = targetLabel.id;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }

  /**
   * Submit Button is clicked
   * Data will be added to the Store and the next Page will open, if all fields are filled properly
   *
   */
  onSubmit() {
    //this.hasFormBeenSubmitted = true;
   // document.getElementById("gender-hint").style.display="";

    let allAreFilled = true;
    let nameField = (<HTMLInputElement>document.getElementById("nameInput"));
    let name: string = nameField.value;
    if (name.length == 0) {
      allAreFilled = false;
    } //TODO eigenen Fehler für no name und andere Felder

    let ageField = (<HTMLInputElement>document.getElementById("ageInput"));
    let age: number; //TODO int?
    if (ageField && ageField.value) { //if age field has no correct value, don't allow to proceed
      age = +ageField.value; //Cast String to int
    } else {
      allAreFilled = false;
    }

    if (this.gender == "" || this.field == "" || this.contact == "") allAreFilled = false;

    console.log("Submit:"); //Check all fields in console output
    console.log("Name: " + name + ", Age: "+age+", Gender: "+this.gender+", Job: "+ this.field+", Contact: "+this.contact);

    if (allAreFilled) {
      this.addData(name, age, this.gender, this.field, this.contact); //if Submit will be accepted, save filled values
      const url = 'profilecontact'; //Switch to profilecontact, if all fields are filled
      let routed = this.router.navigateByUrl(url);
    }
  }

  onSubmitTest() {
    this.hasFormBeenSubmitted = true;

    // check for form validity
    console.log("INVALID:"+this.form.invalid);
    if (this.form.invalid) {
      return;
    }

    console.log(this.patient);
  }

  addData(name: string, alter: number, geschlecht: string, berufsfeld: string, menschenkontakt: string) {
    this.store.dispatch(new PatientDataActions.AddPatientdata({name, alter, geschlecht, berufsfeld, menschenkontakt}));
  }

  fieldRadioStatus(event) {
    let fieldElement: HTMLInputElement = <HTMLInputElement>event.target;
    if (fieldElement.name == "job") {
      this.field = fieldElement.id;
    }
    if (fieldElement.name == "contact") {
      this.contact = fieldElement.id;
    }
  }
}
