import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataViewComponent } from './my-data-view.component';
import {RouterModule} from "@angular/router";

describe('MyDataViewComponent', () => {
  let component: MyDataViewComponent;
  let fixture: ComponentFixture<MyDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataViewComponent ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
