import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroContactoComponent } from './cuadro-contacto.component';

describe('CuadroContactoComponent', () => {
  let component: CuadroContactoComponent;
  let fixture: ComponentFixture<CuadroContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
