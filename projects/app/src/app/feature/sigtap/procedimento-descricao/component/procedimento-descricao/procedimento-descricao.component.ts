import { Component, OnInit } from '@angular/core';
import { ProcedimentoDescricaoFacade } from '../../procedimento-descricao.facade';

@Component({
    selector: 'ts-procedimento-descricao',
    templateUrl: './procedimento-descricao.component.html',
    styleUrls: ['./procedimento-descricao.component.scss']
})
export class ProcedimentoDescricaoComponent implements OnInit {
    loading = this.procedimentoDescricaoFacade.loading$;
    procedimentoDescricao$ = this.procedimentoDescricaoFacade.procedimentoDescricao$;

    constructor(private procedimentoDescricaoFacade: ProcedimentoDescricaoFacade) { }

    ngOnInit(): void {
        this.procedimentoDescricaoFacade.loadProcedimentoDescricao();
    }

}
