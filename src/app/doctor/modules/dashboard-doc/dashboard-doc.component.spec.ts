import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDocComponent } from './dashboard-doc.component';

describe('DashboardDocComponent', () => {
  let component: DashboardDocComponent;
  let fixture: ComponentFixture<DashboardDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
