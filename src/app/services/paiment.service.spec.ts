import { TestBed } from '@angular/core/testing';

import { PaimentService } from './paiment.service';

describe('PaimentService', () => {
  let service: PaimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
