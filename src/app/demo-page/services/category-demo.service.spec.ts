import { TestBed } from '@angular/core/testing';

import { CategoryDemoService } from './category-demo.service';

describe('CategoryDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryDemoService = TestBed.get(CategoryDemoService);
    expect(service).toBeTruthy();
  });
});
