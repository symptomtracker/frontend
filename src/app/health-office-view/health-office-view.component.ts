import {Component, NgModule, OnInit} from '@angular/core';
import {PatientModel, RelatedAttribute, SymptomJourneyModel} from "../_service/api";
import {PatientService} from "../_service/patient.service";
import {Router, RouterModule, Routes} from "@angular/router";

@Component({
  selector: 'app-health-office-view',
  templateUrl: './health-office-view.component.html',
  styleUrls: ['./health-office-view.component.css']
})

export class HealthOfficeViewComponent implements OnInit {
  constructor(
    private patientService: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAllPatients()
  }

  patientsList: PatientModel[];
  async loadAllPatients() {
    this.patientsList = ((await this.patientService.queryPatients()).data);
  }

  goToPatientDetailView(id: String) {
    this.router.navigateByUrl('patientdata');
  }
}
