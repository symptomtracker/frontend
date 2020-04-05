import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {PatientService} from '../_service/patient.service';
import {PatientModel, RelatedAttribute, SymptomJourneyModel} from '../_service/api';
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-basic-view',
  templateUrl: './profile-basic-view.component.html',
  styleUrls: ['./profile-basic-view.component.scss']
})

@Injectable()
export class ProfileBasicViewComponent implements OnInit {
  @ViewChild("f", {static: false})
  public form;

  public hasFormBeenSubmitted: boolean = false;

  constructor(
    private patientService: PatientService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loadPatient();
  }

  //TODO Variablenames
  field = "";
  contact = "";

  patient: PatientModel = new class implements PatientModel { //Initialer Patient in dem eingegebene Werte gespeichert werden, wird als JSON an nächsten View übergeben
    _id: string;
    age: number;
    city: string;
    gender: string;
    linkedCode: string;
    name: string;
    relatedAttributes: Array<RelatedAttribute> = [];
    symptomJourney: Array<SymptomJourneyModel> = [];
  };

  async loadPatient() { //TODO Lade Pateintendaten aus der DB
    /*this.patient = (await this.patientService.getPatient("123")).data;
    this.gender ="male";
    console.log(this.patient);*/

  }

  /**
   * Sets the clicked gender to the gender variable and makes the radio button clicked
   * @param event Toggle event
   */
  toggleActiveStatus(event) {
    let targetLabel: HTMLElement = <HTMLElement>event.target;
    //this.gender = targetLabel.id; //TODO Durch binding nicht nötig?
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
    this.hasFormBeenSubmitted = true;

    // check for form validity
    console.log("INVALID:" + this.form.invalid);
    if (this.form.invalid) {
      return;
    }

    console.log(this.patient);


    let allAreFilled = true;
    if (this.patient.name.length == 0) {
      allAreFilled = false;
      return;
    } //TODO eigenen Fehler für no name und andere Felder

    if (!this.patient.age || this.patient.gender == "" || this.field == "" || this.contact == "") { //if age field has no correct value, don't allow to proceed
      return
    }

    console.log("Submit:"); //Check all fields in console output
    console.log("Name: " + this.patient.name + ", Age: " + this.patient.age + ", Gender: " + this.patient.gender + ", Job: " + this.field + ", Contact: " + this.contact);

    if (allAreFilled) {
      //TODO add data to patient?   this.patient.relatedAttributes.push({Type: "contact", Value: "nocontact"})
      const url = 'profilecontact'; //Switch to profilecontact, if all fields are filled
      let attr: RelatedAttribute = {Type: "field", Value: this.field};
      this.patient.relatedAttributes.push(attr);
      let routedPatient = JSON.stringify(this.patient); //Patient übergebbar machen
      console.log(routedPatient);
      this.router.navigate([url], {state: [routedPatient]}); //Patient als JSON mitgeben
    }
  }

}
