import { TestBed } from '@angular/core/testing';

import { UserBasicDetailsService } from './user-basic-details.service';

describe('UserBasicDetailsService', () => {
  let service: UserBasicDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBasicDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
