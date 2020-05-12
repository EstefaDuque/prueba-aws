import { RouteParam } from './../actions/list.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ofRoute } from 'ngrx-router';
import { mapToParam } from 'src/app/shared/pipes/operator';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ListEffects{
    constructor(private actions$:Actions){}


    @Effect()
    testRouted$= this.actions$.pipe(
        ofRoute('prueba-rutas-redux/:text'),
        mapToParam<string>('text'),
        map(text=>{
            return new RouteParam(text);
        })
    )

}