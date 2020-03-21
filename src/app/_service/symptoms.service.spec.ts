import { TestBed } from '@angular/core/testing';

import { SymptomsService } from './symptoms.service';

describe('SymptomsService', () => {
  let service: SymptomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymptomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
