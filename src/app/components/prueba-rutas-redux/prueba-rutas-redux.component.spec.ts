import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaRutasReduxComponent } from './prueba-rutas-redux.component';
import { StoreModule } from '@ngrx/store';

describe('PruebaRutasReduxComponent', () => {
  let component: PruebaRutasReduxComponent;
  let fixture: ComponentFixture<PruebaRutasReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaRutasReduxComponent ],
      imports:[MatCardModule, StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaRutasReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.destroy (); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
