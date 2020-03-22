import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../_service/symptoms.service';
import { SymptomJourneyModel } from '../_service/api';

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.css']
})
export class SymptomBasicViewComponent implements OnInit {

  constructor(private symptomService:SymptomsService) { }

  symptoms:SymptomJourneyModel[];
  

  ngOnInit(): void {
    this.loadSymptoms();
  }

  private async loadSymptoms(){
    this.symptoms = (await this.symptomService.getAllSymptoms("123")).data;    

    // this.symptoms[0].
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
