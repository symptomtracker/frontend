import {Component, Input, OnInit} from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {SymptomJourneyModel} from "../../_service/api";

@Component({
  selector: 'app-symptom-row',
  templateUrl: './symptom-row.component.html',
  styleUrls: ['./symptom-row.component.scss']
})
export class SymptomRowComponent implements OnInit {
  faChevronRight = faChevronRight
  show: boolean = false

  @Input()
  symptoms: string[]

  @Input()
  symptomJourney: SymptomJourneyModel[]

  symptomDayList: SymptomJourneyModel[]

  constructor() { }

  ngOnInit(): void {
    this.symptomDayList = this.getSymptomsForDay(this.symptoms[0])
  }

  toggleRow() {
    this.show = !this.show
  }

  getSymptomsForDay(day:String) {
    return this.symptomJourney.filter(item => item.createdAt == day)
  }


}
