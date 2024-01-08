import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as competenciasActions from './core/competencias/competencias.actions';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

@Component({
    selector: 'ts-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MainLayoutComponent]
})
export class AppComponent implements OnInit {
    constructor(
        private store: Store
      ) {}

    ngOnInit(): void {
        this.store.dispatch(competenciasActions.competenciasGet());
    }
}
