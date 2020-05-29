import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadrecordsComponent } from './uploadrecords.component';

describe('UploadrecordsComponent', () => {
  let component: UploadrecordsComponent;
  let fixture: ComponentFixture<UploadrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
