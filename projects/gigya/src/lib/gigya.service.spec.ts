import { TestBed } from '@angular/core/testing';
import { GIGYA } from '../../injection-tokens';
import { GigyaService, ZoneAwareProxyService } from '..';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('GigyaService', () => {
  let service: GigyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{
        provide: GIGYA,
        useValue: {
          isReady: true,
          accounts: {}
        }
      },
        {
          provide: ZoneAwareProxyService,
          useValue: {
            run: () => {
            }
          }
        }]
    });
    service = TestBed.inject(GigyaService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
