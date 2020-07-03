import { TestBed } from '@angular/core/testing';

import { AppointmentScheduleService } from './appointment-schedule.service';

describe('AppointmentScheduleService', () => {
  let service: AppointmentScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
