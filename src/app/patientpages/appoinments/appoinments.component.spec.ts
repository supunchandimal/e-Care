import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsComponent } from './appoinments.component';

describe('AppoinmentsComponent', () => {
  let component: AppoinmentsComponent;
  let fixture: ComponentFixture<AppoinmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
