import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthprofileComponent } from './healthprofile.component';

describe('HealthprofileComponent', () => {
  let component: HealthprofileComponent;
  let fixture: ComponentFixture<HealthprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
