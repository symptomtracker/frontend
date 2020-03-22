import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataViewComponent } from './my-data-view.component';

describe('MyDataViewComponent', () => {
  let component: MyDataViewComponent;
  let fixture: ComponentFixture<MyDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataViewComponent ]
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
