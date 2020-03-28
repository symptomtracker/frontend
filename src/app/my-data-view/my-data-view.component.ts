import {Component, Injectable, OnInit} from '@angular/core';
import {PatientService} from "../_service/patient.service";
import {PatientModel} from "../_service/api";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Patientdata} from "../models/patientdata.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-my-data-view',
  templateUrl: './my-data-view.component.html',
  styleUrls: ['./my-data-view.component.scss']
})

@Injectable()
export class MyDataViewComponent implements OnInit {
  patientdata: Observable<Patientdata[]>

  id: string;

  constructor(
    private patientService:PatientService,
    private activeRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.patientdata = store.select('patientdata')
  }
  ngOnInit(): void {
    this.loadPatient(this.id)
  }

  patient: PatientModel;
  async loadPatient(id) {
    this.id = '5e77416a0d65ff16cc8ed426';
    this.patient = (await this.patientService.getPatient(id)).data;
  }
}

