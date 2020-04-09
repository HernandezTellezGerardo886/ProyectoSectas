import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastrearPageComponent } from './rastrear-page.component';

describe('RastrearPageComponent', () => {
  let component: RastrearPageComponent;
  let fixture: ComponentFixture<RastrearPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastrearPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastrearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
