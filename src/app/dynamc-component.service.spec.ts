import { TestBed } from '@angular/core/testing';

import { DynamcComponentService } from './dynamc-component.service';

describe('DynamcComponentService', () => {
  let service: DynamcComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamcComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
