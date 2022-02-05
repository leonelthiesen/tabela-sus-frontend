import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { SigtapModule } from '../sigtap/sigtap.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CompetenciasComponent } from './competencias/competencias.component';

@NgModule({
    declarations: [
        AdminComponent,
        CompetenciasComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        AdminRoutingModule,
        SigtapModule
    ]
})
export class AdminModule { }
