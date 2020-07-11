import { TestBed } from '@angular/core/testing';

import { CdoctorsService } from './cdoctors.service';

describe('CdoctorsService', () => {
  let service: CdoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
