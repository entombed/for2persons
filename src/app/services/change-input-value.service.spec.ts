import { TestBed, inject } from '@angular/core/testing';

import { ChangeInputValueService } from './change-input-value.service';

describe('ChangeInputValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeInputValueService]
    });
  });

  it('should be created', inject([ChangeInputValueService], (service: ChangeInputValueService) => {
    expect(service).toBeTruthy();
  }));
});
