import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { CompetenciasComponent } from "./competencias/competencias.component";

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        data: { title: 'Administração' },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'competencias'
            },
            {
                path: 'competencias',
                component: CompetenciasComponent,
                data: { title: 'Competências' }
            }
        ]
    }
];
