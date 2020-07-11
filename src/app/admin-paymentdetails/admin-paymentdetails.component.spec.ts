import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentdetailsComponent } from './admin-paymentdetails.component';

describe('AdminPaymentdetailsComponent', () => {
  let component: AdminPaymentdetailsComponent;
  let fixture: ComponentFixture<AdminPaymentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
