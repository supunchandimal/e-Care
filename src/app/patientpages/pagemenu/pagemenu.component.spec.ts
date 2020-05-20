import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagemenuComponent } from './pagemenu.component';

describe('PagemenuComponent', () => {
  let component: PagemenuComponent;
  let fixture: ComponentFixture<PagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
