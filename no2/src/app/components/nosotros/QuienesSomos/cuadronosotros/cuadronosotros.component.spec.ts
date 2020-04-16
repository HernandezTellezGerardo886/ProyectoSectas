import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadronosotrosComponent } from './cuadronosotros.component';

describe('CuadronosotrosComponent', () => {
  let component: CuadronosotrosComponent;
  let fixture: ComponentFixture<CuadronosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadronosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadronosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
