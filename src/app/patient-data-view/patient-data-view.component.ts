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

  public barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [35, 36, 40, 40, 40, 38, 38], label: 'Fieber'},
    {data: [0, 0, 1, 3, 1, 1, 0], label: 'Husten'}
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
