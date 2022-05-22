import { TestBed } from '@angular/core/testing';

import { FicheService } from './fiche.service';

describe('FicheService', () => {
  let service: FicheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
