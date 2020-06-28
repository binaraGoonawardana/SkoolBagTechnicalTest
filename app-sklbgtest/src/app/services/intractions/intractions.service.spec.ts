import { TestBed } from '@angular/core/testing';

import { IntractionsService } from './intractions.service';

describe('IntractionsService', () => {
  let service: IntractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
