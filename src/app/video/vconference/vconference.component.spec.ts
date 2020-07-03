import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VconferenceComponent } from './vconference.component';

describe('VconferenceComponent', () => {
  let component: VconferenceComponent;
  let fixture: ComponentFixture<VconferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VconferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
