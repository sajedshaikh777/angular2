import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountlistComponent } from './myaccountlist.component';

describe('MyaccountlistComponent', () => {
  let component: MyaccountlistComponent;
  let fixture: ComponentFixture<MyaccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyaccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
