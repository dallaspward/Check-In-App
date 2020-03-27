import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInGridComponent } from './check-in-grid.component';

describe('CheckInGridComponent', () => {
  let component: CheckInGridComponent;
  let fixture: ComponentFixture<CheckInGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
