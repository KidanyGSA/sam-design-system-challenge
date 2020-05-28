import { TestBed } from '@angular/core/testing';

import { IntegrityInfoService } from './integrity-info.service';

describe('IntegrityInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrityInfoService = TestBed.get(IntegrityInfoService);
    expect(service).toBeTruthy();
  });
});
