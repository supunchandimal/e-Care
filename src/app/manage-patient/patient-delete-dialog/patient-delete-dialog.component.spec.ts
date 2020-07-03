import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDeleteDialogComponent } from './patient-delete-dialog.component';

describe('PatientDeleteDialogComponent', () => {
  let component: PatientDeleteDialogComponent;
  let fixture: ComponentFixture<PatientDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
