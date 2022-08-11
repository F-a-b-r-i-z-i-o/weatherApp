import { TestBed } from '@angular/core/testing';

import { Tab2Service } from './tab2.service';

describe('Tab2Service', () => {
  let service: Tab2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tab2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});