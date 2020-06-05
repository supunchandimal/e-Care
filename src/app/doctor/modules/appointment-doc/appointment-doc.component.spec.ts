import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDocComponent } from './appointment-doc.component';

describe('AppointmentDocComponent', () => {
  let component: AppointmentDocComponent;
  let fixture: ComponentFixture<AppointmentDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
