import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FetchInfoService } from './fetch-info.service';

describe('FetchInfoService', () => {
  let service: FetchInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(FetchInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
