import { TestBed } from '@angular/core/testing';

import { PatientMessagesService } from './patient-messages.service';

describe('PatientMessagesService', () => {
  let service: PatientMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
