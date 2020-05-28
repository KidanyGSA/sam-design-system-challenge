import { TestBed } from '@angular/core/testing';

import { IntegrityWsFiltersService } from './integrity-ws-filters.service';

describe('IntegrityWsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityWsFiltersService = TestBed.get(IntegrityWsFiltersService);
    expect(service).toBeTruthy();
  });
});
