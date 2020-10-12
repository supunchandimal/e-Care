import { TestBed } from '@angular/core/testing';

import { AdminPaymentDetailsService } from './admin-payment-details.service';

describe('AdminPaymentDetailsService', () => {
  let service: AdminPaymentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPaymentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
