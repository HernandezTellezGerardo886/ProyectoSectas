import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoUsuarioPageComponent } from './estado-usuario-page.component';

describe('EstadoUsuarioPageComponent', () => {
  let component: EstadoUsuarioPageComponent;
  let fixture: ComponentFixture<EstadoUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
