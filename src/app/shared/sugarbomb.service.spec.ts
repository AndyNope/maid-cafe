import { TestBed } from '@angular/core/testing';

import { SugarbombService } from './sugarbomb.service';

describe('SugarbombService', () => {
  let service: SugarbombService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugarbombService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
