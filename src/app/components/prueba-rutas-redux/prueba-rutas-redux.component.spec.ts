import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaRutasReduxComponent } from './prueba-rutas-redux.component';

describe('PruebaRutasReduxComponent', () => {
  let component: PruebaRutasReduxComponent;
  let fixture: ComponentFixture<PruebaRutasReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaRutasReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaRutasReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
