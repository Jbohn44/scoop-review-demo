import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTileDemoComponent } from './review-tile-demo.component';

describe('ReviewTileDemoComponent', () => {
  let component: ReviewTileDemoComponent;
  let fixture: ComponentFixture<ReviewTileDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTileDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
