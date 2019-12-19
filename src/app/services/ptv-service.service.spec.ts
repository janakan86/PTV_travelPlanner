import { TestBed, inject } from '@angular/core/testing';

import { PtvService } from './ptv-service.service';

describe('PtvServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PtvService]
    });
  });

  it('should be created', inject([PtvService], (service: PtvService) => {
    expect(service).toBeTruthy();
  }));
});
