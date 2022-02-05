import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CompetenciasComponent } from './competencias/competencias.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: { title: 'Administração' },
        children: [
            {
                path: '',
                redirectTo: 'competencias',
                pathMatch: 'full'
            },
            {
                path: 'competencias',
                component: CompetenciasComponent,
                data: { title: 'Competências' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
