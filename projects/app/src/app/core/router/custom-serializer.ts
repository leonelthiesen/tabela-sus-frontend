import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from './router.state';

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        let params = {};
        while (route.firstChild) {
            params = {
                ...params,
                ...route.params
            };
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams }
        } = routerState;

        return { url, params, queryParams, title: route.data.title };
    }
}
