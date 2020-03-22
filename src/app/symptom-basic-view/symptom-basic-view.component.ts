import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../_service/symptoms.service';
import { SymptomJourneyModel, SymptomCatalogueItem } from '../_service/api';
import { QuestionaireService } from '../_service/questionaire.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.css']
})
export class SymptomBasicViewComponent implements OnInit {
  categories: string[];
  cat: _.CollectionChain<{ color: string; users: SymptomCatalogueItem[]; }>;
  symptomGroups: any;

  constructor(private symptomService: SymptomsService, private questionaireService: QuestionaireService) { }
  lastSymptomValues: SymptomJourneyModel[];
  symptomsCatalogue: SymptomCatalogueItem[];

  values = _

  mainSymptomsCatalogue: SymptomCatalogueItem[] = [
    {
      Category: "Hauptsymptome",
      description: "Husten",
      symptomSeverity: ["KeinHusten", "Leicht", "Mittel", "Schwer"],
      toolTip: "Handelt es sich um trockenen Husten und hat sich der Husten schon länger manifestiert? (Bei einer Erkältung beginnt der Husten ebenfalls trocken, ändert sich aber im Laufe der Zeit.)"
    },
    {
      Category: "Hauptsymptome",
      description: "Kurzatmigkeit",
      symptomSeverity: ["Ja", "Nein"],
      toolTip: ""
    }
  ];

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
    console.log(this.symptomsCatalogue);
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
