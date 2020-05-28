import { TestBed } from '@angular/core/testing';

import { HierarchyFilterService } from './hierarchy-filter.service';

describe('HierarchyFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HierarchyFilterService = TestBed.get(HierarchyFilterService);
    expect(service).toBeTruthy();
  });
});
