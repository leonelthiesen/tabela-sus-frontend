import { Component, OnInit } from '@angular/core';
import { ProcedimentoDescricaoFacade } from '../../procedimento-descricao.facade';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'ts-procedimento-descricao',
    templateUrl: './procedimento-descricao.component.html',
    styleUrls: ['./procedimento-descricao.component.scss'],
    standalone: true,
    imports: [AsyncPipe]
})
export class ProcedimentoDescricaoComponent implements OnInit {
    loading = this.procedimentoDescricaoFacade.loading$;
    procedimentoDescricao$ = this.procedimentoDescricaoFacade.procedimentoDescricao$;

    constructor(private procedimentoDescricaoFacade: ProcedimentoDescricaoFacade) { }

    ngOnInit(): void {
        this.procedimentoDescricaoFacade.loadProcedimentoDescricao();
    }

}
