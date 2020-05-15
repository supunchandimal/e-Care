import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDefaultPageComponent } from './patient-default-page.component';

describe('PatientDefaultPageComponent', () => {
  let component: PatientDefaultPageComponent;
  let fixture: ComponentFixture<PatientDefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDefaultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
