import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsDailyViewComponent } from './symptoms-daily-view.component';

describe('SymptomsDailyViewComponent', () => {
  let component: SymptomsDailyViewComponent;
  let fixture: ComponentFixture<SymptomsDailyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsDailyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsDailyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
