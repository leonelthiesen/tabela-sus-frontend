import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProcedimentoFacade } from '../procedimento/procedimento.facade';
import { CompetenciasFacade } from '../../../core/competencias/competencias.facade';

@Component({
    selector: 'ts-procedimento-list',
    templateUrl: './procedimento-list.component.html',
    styleUrls: ['./procedimento-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
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
