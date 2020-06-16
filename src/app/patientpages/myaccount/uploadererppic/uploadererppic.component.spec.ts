import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadererppicComponent } from './uploadererppic.component';

describe('UploadererppicComponent', () => {
  let component: UploadererppicComponent;
  let fixture: ComponentFixture<UploadererppicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadererppicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadererppicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
