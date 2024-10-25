import { TestBed } from '@angular/core/testing';

import { ToggleThemeServiceService } from './toggle-theme-service.service';

describe('ToggleThemeServiceService', () => {
  let service: ToggleThemeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleThemeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
