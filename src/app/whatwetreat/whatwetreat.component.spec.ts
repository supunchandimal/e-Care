import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatwetreatComponent } from './whatwetreat.component';

describe('WhatwetreatComponent', () => {
  let component: WhatwetreatComponent;
  let fixture: ComponentFixture<WhatwetreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatwetreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatwetreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
