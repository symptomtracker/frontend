import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms'
import { PatientModel } from '../_service/api';

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.css']
})

export class SymptomBasicViewComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {}

  toggleActiveStatus(event) {
    let targetLabel = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }

  showSymptomData() {
    console.log(this.data);
  }

  patient: PatientModel;

  data = {
    // Main symptomes
    fever: undefined,
    cough: undefined,
    shortBreath: undefined,
    muscularPains: undefined,
    soreThroat: undefined,
    headache: undefined,
    nausea: undefined,

    // Further symptomes
    blockedNose: undefined,
    diarrhea: undefined,
    limbPain: undefined,
    appetiteLoss: undefined,
    weightLoss: undefined,
    stomachache: undefined,
    conjunctivitis: undefined,
    rash: undefined,
    lymphoma: undefined,
    apathy: undefined,
    somnolence: undefined
  }
}
