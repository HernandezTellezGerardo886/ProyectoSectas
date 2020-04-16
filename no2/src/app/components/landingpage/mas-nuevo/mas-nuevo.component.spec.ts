import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasNuevoComponent } from './mas-nuevo.component';

describe('MasNuevoComponent', () => {
  let component: MasNuevoComponent;
  let fixture: ComponentFixture<MasNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
