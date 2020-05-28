import { TestBed } from '@angular/core/testing';

import { AwardeeUeidunsFilterService } from './awardee-ueiduns-filter.service';

describe('AwardeeUeidunsFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwardeeUeidunsFilterService = TestBed.get(AwardeeUeidunsFilterService);
    expect(service).toBeTruthy();
  });
});
