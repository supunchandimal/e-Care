import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsDocComponent } from './payments-doc.component';

describe('PaymentsDocComponent', () => {
  let component: PaymentsDocComponent;
  let fixture: ComponentFixture<PaymentsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
