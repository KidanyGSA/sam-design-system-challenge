import { TestBed } from '@angular/core/testing';

import { CommonFilterUtilsService } from './common-filter-utils.service';

describe('CommonFilterUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonFilterUtilsService = TestBed.get(CommonFilterUtilsService);
    expect(service).toBeTruthy();
  });
});
