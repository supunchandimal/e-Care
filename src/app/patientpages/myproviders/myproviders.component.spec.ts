import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprovidersComponent } from './myproviders.component';

describe('MyprovidersComponent', () => {
  let component: MyprovidersComponent;
  let fixture: ComponentFixture<MyprovidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprovidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprovidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
