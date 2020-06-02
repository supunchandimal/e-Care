import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorhistoryComponent } from './behaviorhistory.component';

describe('BehaviorhistoryComponent', () => {
  let component: BehaviorhistoryComponent;
  let fixture: ComponentFixture<BehaviorhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
