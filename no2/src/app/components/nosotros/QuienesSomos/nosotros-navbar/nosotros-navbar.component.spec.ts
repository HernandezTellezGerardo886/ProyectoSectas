import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosNavbarComponent } from './nosotros-navbar.component';

describe('NosotrosNavbarComponent', () => {
  let component: NosotrosNavbarComponent;
  let fixture: ComponentFixture<NosotrosNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
