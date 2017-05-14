import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountdetailsComponent } from './myaccountdetails.component';

describe('MyaccountdetailsComponent', () => {
  let component: MyaccountdetailsComponent;
  let fixture: ComponentFixture<MyaccountdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
