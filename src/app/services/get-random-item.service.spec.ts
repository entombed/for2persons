import { TestBed, inject } from '@angular/core/testing';

import { GetRandomItemService } from './get-random-item.service';

describe('GetRandomItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRandomItemService]
    });
  });

  it('should be created', inject([GetRandomItemService], (service: GetRandomItemService) => {
    expect(service).toBeTruthy();
  }));
});
