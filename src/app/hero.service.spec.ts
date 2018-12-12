import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HeroService ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();

    service = TestBed.get(HeroService);
  });

  test('should exist', () => {
    expect(service).toBeDefined();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
