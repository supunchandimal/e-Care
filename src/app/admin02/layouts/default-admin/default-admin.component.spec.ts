import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAdminComponent } from './default-admin.component';

describe('DefaultAdminComponent', () => {
  let component: DefaultAdminComponent;
  let fixture: ComponentFixture<DefaultAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
