import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthofficeFinderViewComponent } from './healthoffice-finder-view.component';

describe('HealthofficeFinderViewComponent', () => {
  let component: HealthofficeFinderViewComponent;
  let fixture: ComponentFixture<HealthofficeFinderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthofficeFinderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthofficeFinderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
