import { TestBed } from '@angular/core/testing';

import { PatientHealthHistoryService } from './patient-health-history.service';

describe('PatientHealthHistoryService', () => {
  let service: PatientHealthHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientHealthHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
