import { TestBed } from '@angular/core/testing';

import { PpicService } from './ppic.service';

describe('PpicService', () => {
  let service: PpicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
