import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProcedimentoFacade } from '../procedimento/procedimento.facade';
import { CompetenciasFacade } from '../../../core/competencias/competencias.facade';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'ts-procedimento-list',
    templateUrl: './procedimento-list.component.html',
    styleUrls: ['./procedimento-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatButtonModule, FaIconComponent, MatListModule, RouterLink, AsyncPipe]
})
export class ProcedimentoListComponent {
    procedimentos$ = this.procedimentoFacade.procedimentos$;
    procedimentosFilter$ = this.procedimentoFacade.procedimentosFilter$;
    competencias$ = this.competenciasFacade.competencias$;
    competenciaSelectedId$ = this.competenciasFacade.competenciaSelectedId$;

    constructor(private procedimentoFacade: ProcedimentoFacade, private competenciasFacade: CompetenciasFacade) { }

    onCompetenciaSelect({ value }: { value: number }) {
        this.competenciasFacade.setCompetenciaIdSelected(value);
    }

    searchSubmit(f: NgForm) {
        this.procedimentoFacade.setFilter(f.value.filter.toUpperCase());
    }
}
