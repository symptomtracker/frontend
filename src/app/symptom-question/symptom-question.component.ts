import { Component, OnInit, Input } from '@angular/core';
import { SymptomJourneyModel, SymptomCatalogueItem } from '../_service/api';

@Component({
  selector: 'app-symptom-question',
  templateUrl: './symptom-question.component.html',
  styleUrls: ['./symptom-question.component.scss']
})
export class SymptomQuestionComponent implements OnInit {

  constructor() { }

  @Input() symptomDescription: SymptomCatalogueItem;
  @Input() symptomValue: SymptomJourneyModel;

  selectedValue: string = "";

  ngOnInit(): void {
  }

  toggleActiveStatus(event) {
    var targetLabel: HTMLElement = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.parentElement.children.item(index).children[0];
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }
}
