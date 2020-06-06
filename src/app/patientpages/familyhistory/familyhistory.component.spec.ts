import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyhistoryComponent } from './familyhistory.component';

describe('FamilyhistoryComponent', () => {
  let component: FamilyhistoryComponent;
  let fixture: ComponentFixture<FamilyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
