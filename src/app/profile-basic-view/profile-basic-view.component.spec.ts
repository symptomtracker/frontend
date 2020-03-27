import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBasicViewComponent } from './profile-basic-view.component';
import {RouterModule} from "@angular/router";

describe('ProfileBasicViewComponent', () => {
  let component: ProfileBasicViewComponent;
  let fixture: ComponentFixture<ProfileBasicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBasicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBasicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
