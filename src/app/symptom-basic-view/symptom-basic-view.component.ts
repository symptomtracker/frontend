import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../_service/symptoms.service';
import { SymptomJourneyModel, SymptomCatalogueItem } from '../_service/api';
import { QuestionaireService } from '../_service/questionaire.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.scss']
})
export class SymptomBasicViewComponent implements OnInit {
  categories: string[];
  symptomGroups: any;

  constructor(private symptomService: SymptomsService, private questionaireService: QuestionaireService) { }
  lastSymptomValues: SymptomJourneyModel[];
  symptomsCatalogue: SymptomCatalogueItem[];

  ngOnInit(): void {
    this.loadSymptoms();
  }
  groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  private async loadSymptoms() {
    this.symptomsCatalogue = (await this.questionaireService.getCatalogueItems()).data;
    this.symptomGroups = this.groupBy(this.symptomsCatalogue, '@Category');
    this.categories = Object.keys(this.symptomGroups);
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
