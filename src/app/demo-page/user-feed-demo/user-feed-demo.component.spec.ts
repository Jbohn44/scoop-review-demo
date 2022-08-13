import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedDemoComponent } from './user-feed-demo.component';

describe('UserFeedDemoComponent', () => {
  let component: UserFeedDemoComponent;
  let fixture: ComponentFixture<UserFeedDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeedDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
