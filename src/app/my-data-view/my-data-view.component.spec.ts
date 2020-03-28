import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataViewComponent } from './my-data-view.component';
import {RouterModule} from "@angular/router";
import {provideMockStore} from "@ngrx/store/testing";
import {Store, StoreModule} from "@ngrx/store";

describe('MyDataViewComponent', () => {
  let component: MyDataViewComponent;
  let fixture: ComponentFixture<MyDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataViewComponent ],
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot([])
      ],
      providers: [Store]
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
