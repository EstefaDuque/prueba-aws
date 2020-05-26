import { StoreModule, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ListItemsComponent } from './list-items.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;
  let store: MockStore<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemsComponent ],
      imports:[
        MatCardModule ,
        ReactiveFormsModule, 
        StoreModule.forRoot({})],
      providers: [
        {provide: MatDialog, useValue:{}},
        provideMockStore()  ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.destroy (); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
