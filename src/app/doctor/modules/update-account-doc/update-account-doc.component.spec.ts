import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountDocComponent } from './update-account-doc.component';

describe('UpdateAccountDocComponent', () => {
  let component: UpdateAccountDocComponent;
  let fixture: ComponentFixture<UpdateAccountDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccountDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
