import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInputViewComponent } from './code-input-view.component';

describe('CodeInputViewComponent', () => {
  let component: CodeInputViewComponent;
  let fixture: ComponentFixture<CodeInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
