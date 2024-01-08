import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SigtapModule } from '../sigtap/sigtap.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CompetenciasComponent } from './competencias/competencias.component';

@NgModule({
    imports: [
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    SigtapModule,
    AdminComponent,
    CompetenciasComponent
]
})
export class AdminModule { }
