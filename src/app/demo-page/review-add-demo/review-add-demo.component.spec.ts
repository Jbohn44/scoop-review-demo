import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAddDemoComponent } from './review-add-demo.component';

describe('ReviewAddDemoComponent', () => {
  let component: ReviewAddDemoComponent;
  let fixture: ComponentFixture<ReviewAddDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewAddDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAddDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
