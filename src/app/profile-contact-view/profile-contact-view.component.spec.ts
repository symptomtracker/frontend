import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {PatientModel, RelatedAttribute} from "../_service/api";
import { ProfileContactViewComponent } from './profile-contact-view.component';

describe('ProfileContactViewComponent', () => {
  let component: ProfileContactViewComponent;
  let fixture: ComponentFixture<ProfileContactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
