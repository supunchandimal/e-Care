import { TestBed } from '@angular/core/testing';

import { PatientDeleteDialogService } from './patient-delete-dialog.service';

describe('PatientDeleteDialogService', () => {
  let service: PatientDeleteDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDeleteDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
