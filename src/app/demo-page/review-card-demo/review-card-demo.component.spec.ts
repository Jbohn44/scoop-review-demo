import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCardDemoComponent } from './review-card-demo.component';

describe('ReviewCardDemoComponent', () => {
  let component: ReviewCardDemoComponent;
  let fixture: ComponentFixture<ReviewCardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
