import { TestBed } from '@angular/core/testing';

import { GetCurrDataService } from './get-curr-data.service';

describe('GetCurrDataService', () => {
  let service: GetCurrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
