import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInPopupComponent } from './check-in-popup.component';

describe('CheckInPopupComponent', () => {
  let component: CheckInPopupComponent;
  let fixture: ComponentFixture<CheckInPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
