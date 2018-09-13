import { TestBed, inject } from '@angular/core/testing';

import { ShareBarService } from './share-bar.service';

describe('ShareBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareBarService]
    });
  });

  it('should be created', inject([ShareBarService], (service: ShareBarService) => {
    expect(service).toBeTruthy();
  }));
});
