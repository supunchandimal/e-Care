import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocvComponent } from './docv.component';

describe('DocvComponent', () => {
  let component: DocvComponent;
  let fixture: ComponentFixture<DocvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
