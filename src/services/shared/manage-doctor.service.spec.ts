import { TestBed } from '@angular/core/testing';

import { ManageDoctorService } from './manage-doctor.service';

describe('ManageDoctorService', () => {
  let service: ManageDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
