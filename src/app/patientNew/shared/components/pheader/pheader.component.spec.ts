import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHeaderComponent } from './pheader.component';

describe('PHeaderComponent', () => {
  let component: PHeaderComponent;
  let fixture: ComponentFixture<PHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
