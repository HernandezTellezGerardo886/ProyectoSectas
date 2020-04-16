import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoNavbarComponent } from './aviso-navbar.component';

describe('AvisoNavbarComponent', () => {
  let component: AvisoNavbarComponent;
  let fixture: ComponentFixture<AvisoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
