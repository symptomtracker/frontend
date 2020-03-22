import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSuccessViewComponent } from './input-success-view.component';

describe('InputSuccessViewComponent', () => {
  let component: InputSuccessViewComponent;
  let fixture: ComponentFixture<InputSuccessViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSuccessViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSuccessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
