import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthOfficeViewComponent } from './health-office-view.component';
import {RouterModule} from "@angular/router";
import {FilterPipe} from "../pipes/filter.pipes";

describe('HealthOfficeViewComponent', () => {
  let component: HealthOfficeViewComponent;
  let fixture: ComponentFixture<HealthOfficeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HealthOfficeViewComponent,
        FilterPipe
      ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthOfficeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
