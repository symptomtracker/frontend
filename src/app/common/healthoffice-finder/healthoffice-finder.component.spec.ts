import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthofficeFinderComponent } from './healthoffice-finder.component';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('HealthofficeFinderComponent', () => {
  let component: HealthofficeFinderComponent;
  let fixture: ComponentFixture<HealthofficeFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthofficeFinderComponent ],
      providers: [HttpClient, HttpHandler]
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
