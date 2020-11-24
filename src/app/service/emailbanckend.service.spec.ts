import { TestBed } from '@angular/core/testing';

import { EmailbanckendService } from './emailbanckend.service';

describe('EmailbanckendService', () => {
  let service: EmailbanckendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailbanckendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
