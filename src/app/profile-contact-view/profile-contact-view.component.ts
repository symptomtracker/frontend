import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {NavigationStart, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";
import {PatientModel, RelatedAttribute} from "../_service/api";

@Component({
  selector: 'app-profile-contact-view',
  templateUrl: './profile-contact-view.component.html',
  styleUrls: ['./profile-contact-view.component.scss']
})
export class ProfileContactViewComponent implements OnInit {

  @ViewChild("f", {static: false})
  public form;

  public patient: PatientModel;

  public hasFormBeenSubmitted: boolean = false;
  public allAreFilled: boolean = true;

  public risk: string;
  public contact: string;
  public date: string;
  public smoker: string;
  public immun: string;
  public pregnant: string;
  public illnesses: string; //Ggf Liste von Vorerkrankungen, getrennt durch Komma oder Leerzeichen TODO Angaben zur Formatierung vorgeben?

  constructor(private router: Router) {
    this.patient = JSON.parse(this.router.getCurrentNavigation().extras.state[0]); //Patienten mit den bisher eingegebenen Daten erstellen
    console.log(this.patient);
  }

  ngOnInit(): void {

  }

  toggleActiveStatus(event) {
    let targetLabel: HTMLElement = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }

  onSubmit() {
    this.hasFormBeenSubmitted = true;

    console.log(!this.date);
    if (!this.date && this.contact == "contact-yes") { // Wenn Kontakt da war, aber kein letztes Datum eingetragen wurde
        this.allAreFilled = false;
        return;
      } else {
        this.allAreFilled = true;
      }
    // check for form validity
    console.log("INVALID:" + this.form.invalid);
    if (this.form.invalid) {
      return;
    }

    if (this.allAreFilled) {


      let attr: RelatedAttribute = {Type: "risk", Value: this.risk};
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "contact", Value: this.contact};
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "contact-date", Value: this.date};
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "smoker", Value: this.smoker};
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "contact", Value: this.contact};
      this.patient.relatedAttributes.push(attr);

      let field = <HTMLInputElement>(document.getElementById("illness-immun"));
      attr = {Type: "illness-lung", Value: String(field.checked)}; //String statt Bool gut?
      this.patient.relatedAttributes.push(attr);

      field = <HTMLInputElement>(document.getElementById("illness-hearth"));
      attr = {Type: "illness-hearth", Value: String(field.checked)}; //String statt Bool gut?
      this.patient.relatedAttributes.push(attr);

      field = <HTMLInputElement>(document.getElementById("illness-diabetes"));
      attr = {Type: "illness-diabetes", Value: String(field.checked)}; //String statt Bool gut?
      this.patient.relatedAttributes.push(attr);

      field = <HTMLInputElement>(document.getElementById("illness-lung"));
      attr = {Type: "illness-lung", Value: String(field.checked)}; //String statt Bool gut?
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "pre-existing-illnesses", Value: this.illnesses}; //TODO illnesses undefined gut?
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "immun", Value: this.immun};
      this.patient.relatedAttributes.push(attr);

      attr = {Type: "pregnant", Value: this.pregnant};
      this.patient.relatedAttributes.push(attr);

      console.log("Submit:"); //Check all fields in console output
      console.log(this.patient);

      let routedPatient = JSON.stringify(this.patient); //Patient übergebbar machen
      console.log(routedPatient);
      const url = 'symptombasic';
      this.router.navigate([url], {state: [routedPatient]}); //Patient als JSON mitgeben
    }
  }
}
