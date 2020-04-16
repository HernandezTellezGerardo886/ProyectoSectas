import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelcarouselComponent } from './marvelcarousel.component';

describe('MarvelcarouselComponent', () => {
  let component: MarvelcarouselComponent;
  let fixture: ComponentFixture<MarvelcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
