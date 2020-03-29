import { Component, OnInit } from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patient-data-view',
  templateUrl: './patient-data-view.component.html',
  styleUrls: ['./patient-data-view.component.scss'],
  providers: [DatePipe]
})
export class PatientDataViewComponent implements OnInit {

  id: string;
  symptomsByDate: string[];
  fieberTestArray: any

  fieber: any

  barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {data: [35, 36, 40, 40, 40, 38, 38], label: 'Fieber'},
    {data: [0, 0, 1, 3, 1, 1, 0], label: 'Husten'}
  ];

  constructor(
    private patientService:PatientService,
    private activeRoute: ActivatedRoute,
    private datepipe: DatePipe
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
    this.loadPatient(this.id);
  }

  patient: PatientModel;
  async loadPatient(id: string) {
    this.patient = (await this.patientService.getPatient(id)).data;
    this.symptomsByDate = (await this.getSymptomsByDate());
    // (await this.createBarCharts());

  }

  // createBarCharts() {
  //   const result = this.patient?.symptomJourney.filter(item => item.description == 'Husten');
  //   const dates = result.map(item => item.createdAt);
  //   const dataHusten = result.map(item => item.symptomSeverity);
  //   this.barChartLabels = this.symptomsByDate.map(i => this.datepipe.transform(i[0], 'dd.MM.yy'));
  //   this.barChartData = [
  //     {data: this.createNewValuesForFieber(), label: 'Fieber'},
  //   ];
  //   // Create Test Array with new values for Fieber
  // }
  //
  // createNewValuesForFieber(): number[] {
  //   return [1, 2, 3, 0]
  // };

  getSymptomsByDate(): any {
    const symptoms = this.patient?.symptomJourney;
    let symptomsByDate = symptoms.reduce((acc, k) => {
      let date = k.createdAt;
      acc[date] = acc[date] || [];
      acc[date].push(k);
      return acc;
    }, {});
    return Object.entries(symptomsByDate);
  }

}
