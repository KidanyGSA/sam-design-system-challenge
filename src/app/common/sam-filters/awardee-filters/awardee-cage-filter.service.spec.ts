import { TestBed } from '@angular/core/testing';

import { AwardeeCageFilterService } from './awardee-cage-filter.service';

describe('AwardeeCageFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwardeeCageFilterService = TestBed.get(AwardeeCageFilterService);
    expect(service).toBeTruthy();
  });
});
