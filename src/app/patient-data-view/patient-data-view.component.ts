import { Component, OnInit } from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-data-view',
  templateUrl: './patient-data-view.component.html',
  styleUrls: ['./patient-data-view.component.css']
})
export class PatientDataViewComponent implements OnInit {

  id: string;

  constructor(
    private patientService:PatientService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit(): void {
    this.loadPatient(this.id);
  }

  patient: PatientModel;
  async loadPatient(id: string) {
    this.patient = (await this.patientService.getPatient(id)).data;
    console.log(this.patient);
  }

}
