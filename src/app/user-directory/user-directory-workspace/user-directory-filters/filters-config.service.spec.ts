import { TestBed } from '@angular/core/testing';

import { FiltersConfigService } from './filters-config.service';

describe('FiltersConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltersConfigService = TestBed.get(FiltersConfigService);
    expect(service).toBeTruthy();
  });
});
