import { TestBed } from '@angular/core/testing';

import { PassingCVService } from './passing-cv.service';

describe('PassingCVService', () => {
  let service: PassingCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassingCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
