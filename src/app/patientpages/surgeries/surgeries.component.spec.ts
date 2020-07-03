import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeriesComponent } from './surgeries.component';

describe('SurgeriesComponent', () => {
  let component: SurgeriesComponent;
  let fixture: ComponentFixture<SurgeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
