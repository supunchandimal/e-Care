import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayhereComponent } from './payhere.component';

describe('PayhereComponent', () => {
  let component: PayhereComponent;
  let fixture: ComponentFixture<PayhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
