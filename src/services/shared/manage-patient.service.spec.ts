import { TestBed } from '@angular/core/testing';

import { ManagePatientService } from './manage-patient.service';

describe('ManagePatientService', () => {
  let service: ManagePatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
