import { TestBed } from '@angular/core/testing';

import { QuestionaireService } from './questionaire.service';

describe('QuestionaireService', () => {
  let service: QuestionaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
