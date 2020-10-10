import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSidebarComponent } from './psidebar.component';

describe('PSidebarComponent', () => {
  let component: PSidebarComponent;
  let fixture: ComponentFixture<PSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
