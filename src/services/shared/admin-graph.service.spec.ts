import { TestBed } from '@angular/core/testing';

import { AdminGraphService } from './admin-graph.service';

describe('AdminGraphService', () => {
  let service: AdminGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
