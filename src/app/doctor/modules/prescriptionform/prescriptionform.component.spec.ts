import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionformComponent } from './prescriptionform.component';

describe('PrescriptionformComponent', () => {
  let component: PrescriptionformComponent;
  let fixture: ComponentFixture<PrescriptionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
