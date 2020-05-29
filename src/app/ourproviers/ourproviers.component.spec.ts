import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproviersComponent } from './ourproviers.component';

describe('OurproviersComponent', () => {
  let component: OurproviersComponent;
  let fixture: ComponentFixture<OurproviersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproviersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproviersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
