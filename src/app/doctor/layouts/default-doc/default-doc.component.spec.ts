import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDocComponent } from './default-doc.component';

describe('DefaultDocComponent', () => {
  let component: DefaultDocComponent;
  let fixture: ComponentFixture<DefaultDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
