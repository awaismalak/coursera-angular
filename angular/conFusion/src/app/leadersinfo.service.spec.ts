import { TestBed } from '@angular/core/testing';

import { LeadersinfoService } from './leadersinfo.service';

describe('LeadersinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadersinfoService = TestBed.get(LeadersinfoService);
    expect(service).toBeTruthy();
  });
});
