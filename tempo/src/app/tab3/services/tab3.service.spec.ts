import { TestBed } from '@angular/core/testing';

import { Tab3Service } from './tab3.service';

describe('Tab3Service', () => {
  let service: Tab3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});