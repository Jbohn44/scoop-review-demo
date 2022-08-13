import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagerDemoComponent } from './category-manager-demo.component';

describe('CategoryManagerDemoComponent', () => {
  let component: CategoryManagerDemoComponent;
  let fixture: ComponentFixture<CategoryManagerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryManagerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
