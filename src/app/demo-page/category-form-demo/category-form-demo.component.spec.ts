import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormDemoComponent } from './category-form-demo.component';

describe('CategoryFormDemoComponent', () => {
  let component: CategoryFormDemoComponent;
  let fixture: ComponentFixture<CategoryFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
