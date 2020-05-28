import { TestBed } from '@angular/core/testing';

import { UserDirectoryWsFiltersService } from './user-directory-ws-filters.service';

describe('UserDirectoryWsFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDirectoryWsFiltersService = TestBed.get(UserDirectoryWsFiltersService);
    expect(service).toBeTruthy();
  });
});
