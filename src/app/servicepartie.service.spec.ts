import { TestBed } from '@angular/core/testing';

import { ServicepartieService } from './servicepartie.service';

describe('ServicepartieService', () => {
  let service: ServicepartieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepartieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
