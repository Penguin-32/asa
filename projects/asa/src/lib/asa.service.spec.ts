import { TestBed } from '@angular/core/testing';

import { AsaService } from './asa.service';

describe('AsaService', () => {
  let service: AsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
