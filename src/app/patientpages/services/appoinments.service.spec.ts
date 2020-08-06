import { TestBed } from '@angular/core/testing';

import { AppoinmentsService } from './appoinments.service';

describe('AppoinmentsService', () => {
  let service: AppoinmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoinmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
