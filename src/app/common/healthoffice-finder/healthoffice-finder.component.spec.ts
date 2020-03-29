import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthofficeFinderComponent } from './healthoffice-finder.component';

describe('HealthofficeFinderComponent', () => {
  let component: HealthofficeFinderComponent;
  let fixture: ComponentFixture<HealthofficeFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthofficeFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthofficeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
