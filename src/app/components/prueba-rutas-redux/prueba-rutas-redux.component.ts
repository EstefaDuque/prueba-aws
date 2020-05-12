import { selectList } from './../../store/selectors/list.selectors';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-prueba-rutas-redux',
  templateUrl: './prueba-rutas-redux.component.html',
  styleUrls: ['./prueba-rutas-redux.component.css'],
})
export class PruebaRutasReduxComponent implements OnInit {
  getState$: Observable<any>;
  selectText: string;

  constructor(private store: Store<IAppState>) {
    this.getState$ = this.store.select(selectList);
  }

  ngOnInit() {
    this.getState$.subscribe((result) => {
      this.selectText = result.text;
    });
  }
}
