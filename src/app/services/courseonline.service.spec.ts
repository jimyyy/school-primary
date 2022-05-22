import { TestBed } from '@angular/core/testing';

import { CourseonlineService } from './courseonline.service';

describe('CourseonlineService', () => {
  let service: CourseonlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseonlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
