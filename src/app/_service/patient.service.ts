import { Injectable } from '@angular/core';
import {PatientApi} from './api/api'
@Injectable({
  providedIn: 'root'
})
export class PatientService extends PatientApi{
  constructor() {
    super({basePath: 'https://api.symptomtracker.de/alchmi/Symptom_Tracker_Patient_API/1.0.0'});
  }
}
