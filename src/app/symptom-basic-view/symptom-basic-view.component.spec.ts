import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomBasicViewComponent } from './symptom-basic-view.component';

describe('SymptomBasicViewComponent', () => {
  let component: SymptomBasicViewComponent;
  let fixture: ComponentFixture<SymptomBasicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomBasicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomBasicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
