import { TestBed } from '@angular/core/testing';

import { SetionIndicatorServService } from './setion-indicator-serv.service';

describe('SetionIndicatorServService', () => {
  let service: SetionIndicatorServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetionIndicatorServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
