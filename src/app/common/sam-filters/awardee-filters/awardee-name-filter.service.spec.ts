import { TestBed } from '@angular/core/testing';

import { AwardeeNameFilterService } from './awardee-name-filter.service';

describe('AwardeeNameFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwardeeNameFilterService = TestBed.get(AwardeeNameFilterService);
    expect(service).toBeTruthy();
  });
});
