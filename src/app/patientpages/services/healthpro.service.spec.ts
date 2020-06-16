import { TestBed } from '@angular/core/testing';

import { HealthproService } from './healthpro.service';

describe('HealthproService', () => {
  let service: HealthproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
