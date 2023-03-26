import { TestBed } from '@angular/core/testing';

import { PlanBuilderServiceService } from './plan-builder-service.service';

describe('PlanBuilderServiceService', () => {
  let service: PlanBuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanBuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
