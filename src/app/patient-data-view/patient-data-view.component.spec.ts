import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataViewComponent } from './patient-data-view.component';

describe('PatientDataViewComponent', () => {
  let component: PatientDataViewComponent;
  let fixture: ComponentFixture<PatientDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
