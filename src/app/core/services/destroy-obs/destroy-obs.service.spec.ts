import { TestBed } from '@angular/core/testing';

import { DestroyObsService } from './destroy-obs.service';

describe('DestroyObsService', () => {
  let service: DestroyObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestroyObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
