import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as competenciasActions from './core/competencias/competencias.actions';

@Component({
    selector: 'ts-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    constructor(
        private store: Store
      ) {}

    ngOnInit(): void {
        this.store.dispatch(competenciasActions.competenciasGet());
    }
}
