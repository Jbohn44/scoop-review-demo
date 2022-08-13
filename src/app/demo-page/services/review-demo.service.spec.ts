import { TestBed } from '@angular/core/testing';

import { ReviewDemoService } from './review-demo.service';

describe('ReviewDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewDemoService = TestBed.get(ReviewDemoService);
    expect(service).toBeTruthy();
  });
});
