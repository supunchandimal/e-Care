import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDocComponent } from './patients-doc.component';

describe('PatientsDocComponent', () => {
  let component: PatientsDocComponent;
  let fixture: ComponentFixture<PatientsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
