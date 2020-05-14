import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ofRoute } from 'ngrx-router';
import { map } from 'rxjs/operators';

import { RouteParam } from '@app/store/actions/list.actions';
import { mapToParam } from '@app/shared/pipes/operator';


@Injectable()
export class ListEffects{
    constructor(private actions$: Actions){}


    @Effect()
    RoutedText$ = this.actions$.pipe(
        ofRoute('prueba-rutas-redux/:text'),
        mapToParam<string>('text'),
        map(paramText => {
            return new RouteParam(paramText);
        })
    );
}