import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDemoComponent } from './category-demo.component';

describe('CategoryDemoComponent', () => {
  let component: CategoryDemoComponent;
  let fixture: ComponentFixture<CategoryDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
