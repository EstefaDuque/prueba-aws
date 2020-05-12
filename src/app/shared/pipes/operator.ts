  
import { Action } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { RouteNavigation, ROUTER_NAVIGATION_TYPE, isRoute } from 'ngrx-router';
import { MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';

export function ofRoute(route: string | string[] | RegExp): MonoTypeOperatorFunction<RouteNavigation> {
    return filter<RouteNavigation>(isRoute(route));
}

export function mapToParam<T>(key: string): OperatorFunction<RouteNavigation, T> {
    return map<RouteNavigation, T>(action => action.payload.params[key]);
}
