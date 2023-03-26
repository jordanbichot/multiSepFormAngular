import { TestBed } from '@angular/core/testing';

import { StepControlServiceService } from './step-control-service.service';

describe('StepControlServiceService', () => {
  let service: StepControlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepControlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
