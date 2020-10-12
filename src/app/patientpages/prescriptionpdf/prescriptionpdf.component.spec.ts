import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionpdfComponent } from './prescriptionpdf.component';

describe('PrescriptionpdfComponent', () => {
  let component: PrescriptionpdfComponent;
  let fixture: ComponentFixture<PrescriptionpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
