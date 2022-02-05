import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { createEffect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
    filter,
    map,
    tap,
    withLatestFrom
} from 'rxjs/operators';

import { environment } from 'projects/app/src/environments/environment';
import { AppState, selectRouterState } from '../core.state';

export const SETTINGS_KEY = 'ROUTER';

declare let gtag: (type: string, code: string, parms: object) => void;

@Injectable()
export class RouterEffects {
    constructor(
        private router: Router,
        private titleServive: Title,
        private store: Store<AppState>,
    ) { }

    routeTo$ = createEffect(
        () =>
            this.router.events.pipe(
                filter(() => environment.production),
                filter(event => event instanceof NavigationEnd),
                map(event => event as NavigationEnd),
                withLatestFrom(this.store.pipe(select(selectRouterState))),
                tap(([routerEvent, routerState]) => {
                    gtag('config', 'G-HVFZLZ2J5P', {
                        page_path: routerEvent.urlAfterRedirects
                    });
                })
            ),
        { dispatch: false }
    );

    setTitle$ = createEffect(
        () =>
            this.router.events.pipe(
                filter((event) => event instanceof ActivationEnd),
                withLatestFrom(this.store.pipe(select(selectRouterState))),
                tap(([RouterEvent, routerState]) => {
                    if (routerState.state.title) {
                        this.titleServive.setTitle(`${routerState.state.title} - ${environment.appName}`);
                    } else {
                        this.titleServive.setTitle(environment.appName);
                    }
                })
            ),
        { dispatch: false }
      );
}
