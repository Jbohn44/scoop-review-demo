import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFeedDemoComponent } from './activity-feed-demo.component';

describe('ActivityFeedDemoComponent', () => {
  let component: ActivityFeedDemoComponent;
  let fixture: ComponentFixture<ActivityFeedDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityFeedDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFeedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
