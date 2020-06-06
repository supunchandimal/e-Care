import { TestBed } from '@angular/core/testing';

import { GetfeedbacksService } from './getfeedbacks.service';

describe('GetfeedbacksService', () => {
  let service: GetfeedbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfeedbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
