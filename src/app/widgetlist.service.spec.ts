import { TestBed, inject } from '@angular/core/testing';

import { WidgetlistService } from './widgetlist.service';

describe('WidgetlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetlistService]
    });
  });

  it('should be created', inject([WidgetlistService], (service: WidgetlistService) => {
    expect(service).toBeTruthy();
  }));
});
