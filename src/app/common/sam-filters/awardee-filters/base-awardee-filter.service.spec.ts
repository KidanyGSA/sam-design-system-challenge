import { TestBed } from '@angular/core/testing';

import { BaseAwardeeFilterService } from './base-awardee-filter.service';

describe('BaseAwardeeFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseAwardeeFilterService = TestBed.get(BaseAwardeeFilterService);
    expect(service).toBeTruthy();
  });
});
