import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationhistoryComponent } from './consultationhistory.component';

describe('ConsultationhistoryComponent', () => {
  let component: ConsultationhistoryComponent;
  let fixture: ComponentFixture<ConsultationhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
