import { TestBed } from '@angular/core/testing';

import { AvailableResourcesProviderService } from './available-resources-provider.service';

describe('AvailableResourcesProviderService', () => {
  let service: AvailableResourcesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableResourcesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
