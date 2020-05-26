import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergierecordsComponent } from './allergierecords.component';

describe('AllergierecordsComponent', () => {
  let component: AllergierecordsComponent;
  let fixture: ComponentFixture<AllergierecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergierecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergierecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
