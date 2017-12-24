import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydetailComponent } from './displaydetail.component';

describe('DisplaydetailComponent', () => {
  let component: DisplaydetailComponent;
  let fixture: ComponentFixture<DisplaydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
