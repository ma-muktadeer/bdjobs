import { TestBed } from '@angular/core/testing';

import { TestSocket } from './test-socket';

describe('TestSocket', () => {
  let service: TestSocket;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSocket);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
