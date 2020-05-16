import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { TextListState } from '@app/store/state/list.state';
import {  selectTextList } from '@app/store/selectors/list.selectors';
import { AppState } from '@app/store/state/app.state';


@Component({
  selector: 'app-prueba-rutas-redux',
  templateUrl: './prueba-rutas-redux.component.html',
  styleUrls: ['./prueba-rutas-redux.component.css'],
})
export class PruebaRutasReduxComponent implements OnInit {

  textListState$: Observable<TextListState>;
  selectText: string;

  constructor(private store: Store<AppState>) {
    this.textListState$ = this.store.select(selectTextList);
    
  }

  ngOnInit() {
    this.textListState$.subscribe((result) => {
      this.selectText = result.text;
    });
  }
}
