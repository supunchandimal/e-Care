import { TestBed } from '@angular/core/testing';

import { OpoService } from './opo.service';

describe('OpoService', () => {
  let service: OpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
