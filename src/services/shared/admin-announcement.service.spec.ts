import { TestBed } from '@angular/core/testing';

import { AdminAnnouncementService } from './admin-announcement.service';

describe('AdminAnnouncementService', () => {
  let service: AdminAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
