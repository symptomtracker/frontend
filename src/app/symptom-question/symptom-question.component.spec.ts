import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SymptomQuestionComponent } from './symptom-question.component';

describe('SymptomQuestionComponent', () => {
  let component: SymptomQuestionComponent;
  let fixture: ComponentFixture<SymptomQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SymptomQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
