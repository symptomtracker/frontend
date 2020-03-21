import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyStatementViewComponent } from './privacy-statement-view.component';

describe('PrivacyStatementViewComponent', () => {
  let component: PrivacyStatementViewComponent;
  let fixture: ComponentFixture<PrivacyStatementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyStatementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyStatementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
