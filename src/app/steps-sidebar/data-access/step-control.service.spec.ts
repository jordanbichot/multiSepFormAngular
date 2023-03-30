import { TestBed } from '@angular/core/testing';

import { StepControlService } from './step-control.service';

describe('StepControlServiceService', () => {
  let service: StepControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
