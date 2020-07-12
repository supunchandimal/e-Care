import { TestBed } from '@angular/core/testing';

import { AnnouncementsDocService } from './announcements-doc.service';

describe('AnnouncementsDocService', () => {
  let service: AnnouncementsDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncementsDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
