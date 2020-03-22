import { Injectable } from '@angular/core';
import { SymptomsApi } from './api';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService extends SymptomsApi {

  constructor() {
    super({ basePath: 'https://api.symptomtracker.de/1.0.0/' });
  }
}
