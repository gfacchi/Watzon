import { TestBed, inject } from '@angular/core/testing';

import { CustomerDetailService } from './customer-detail.service';

describe('CustomerDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDetailService]
    });
  });

  it('should be created', inject([CustomerDetailService], (service: CustomerDetailService) => {
    expect(service).toBeTruthy();
  }));
});
