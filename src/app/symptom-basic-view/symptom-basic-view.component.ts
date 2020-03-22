import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.css']
})

export class SymptomBasicViewComponent implements OnInit {
  constructor() {
    this.registerDebugOutputForFormControl();
  }

  ngOnInit(): void {}

  registerDebugOutputForFormControl() {
    for (var key in this.data) {
      let form = <FormControl>this.data[key];
      let name = key;
      form.valueChanges.subscribe((value) => console.log(name+": "+value));
    }
  }

  toggleActiveStatus(event) {
    let targetLabel = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }

  data = {
    // Main symptomes
    cough: new FormControl(undefined),
    shortBreath: new FormControl(undefined),
    muscularPains: new FormControl(undefined),
    soreThroat: new FormControl(undefined),
    headache: new FormControl(undefined),
    nausea: new FormControl(undefined),

    // Further symptomes
    blockedNose: new FormControl(undefined),
    diarrhea: new FormControl(undefined),
    limbPain: new FormControl(undefined),
    appetiteLoss: new FormControl(undefined),
    weightLoss: new FormControl(undefined),
    stomachache: new FormControl(undefined),
    conjunctivitis: new FormControl(undefined),
    rash: new FormControl(undefined),
    lymphoma: new FormControl(undefined),
    apathy: new FormControl(undefined),
    somnolence: new FormControl(undefined)
  }
}
