import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../_service/symptoms.service';
import { SymptomJourneyModel, SymptomCatalogueItem } from '../_service/api';
import { QuestionaireService } from '../_service/questionaire.service';

@Component({
  selector: 'app-symptom-basic-view',
  templateUrl: './symptom-basic-view.component.html',
  styleUrls: ['./symptom-basic-view.component.css']
})
export class SymptomBasicViewComponent implements OnInit {

  constructor(private symptomService: SymptomsService, private questionaireService: QuestionaireService) { }

  lastSymptomValues: SymptomJourneyModel[];
  symptomsCatalogue: SymptomCatalogueItem[];
  mainSymptomsCatalogue: SymptomCatalogueItem[] = [
    {
      Category: "Hauptsymptome",
      description: "Husten",
      symptomSeverity: ["KeinHusten", "Leicht", "Mittel", "Schwer"],
      tooltip: "Handelt es sich um trockenen Husten und hat sich der Husten schon länger manifestiert? (Bei einer Erkältung beginnt der Husten ebenfalls trocken, ändert sich aber im Laufe der Zeit.)"
    },
    {
      Category: "Hauptsymptome",
      description: "Kurzatmigkeit",
      symptomSeverity: ["Ja", "Nein"],
      tooltip: ""
    }
  ];

  ngOnInit(): void {
    this.loadSymptoms();
  }

  private async loadSymptoms() {
    this.lastSymptomValues = (await this.symptomService.getAllSymptoms("123")).data;
    this.symptomsCatalogue = (await this.questionaireService.getCatalogueItems()).data;
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
