import { TestBed } from '@angular/core/testing';

import { UserDirectoryService } from './user-directory-api.service';

describe('UserDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDirectoryService = TestBed.get(UserDirectoryService);
    expect(service).toBeTruthy();
  });
});
