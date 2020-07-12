import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementsDocComponent } from './announcements-doc.component';

describe('AnnouncementsDocComponent', () => {
  let component: AnnouncementsDocComponent;
  let fixture: ComponentFixture<AnnouncementsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
