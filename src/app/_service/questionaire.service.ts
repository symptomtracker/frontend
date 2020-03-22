import { Injectable } from '@angular/core';
import { QuestionaireApi } from './api';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService extends QuestionaireApi {

  constructor() {
    super({ basePath: 'https://api.symptomtracker.de/1.0.0/' });
  }
}
