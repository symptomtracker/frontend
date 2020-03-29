import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomRowComponent } from './symptom-row.component';

describe('SymptomRowComponent', () => {
  let component: SymptomRowComponent;
  let fixture: ComponentFixture<SymptomRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
