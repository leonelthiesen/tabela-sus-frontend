import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ProcedimentoFacade } from '../procedimento/procedimento.facade';

@Component({
    selector: 'ts-procedimento',
    templateUrl: './procedimento.component.html',
    styleUrls: ['./procedimento.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcedimentoComponent implements OnInit {
    procedimento$ = this.procedimentoFacade.procedimento$;

    tabs = [
        { link: 'detalhe', label: 'Detalhe' },
        { link: 'descricao', label: 'Descrição' },
        { link: 'cid', label: 'CID' },
        { link: 'cbo', label: 'CBO' },
        { link: 'leito', label: 'Leito' },
        { link: 'servico-classificacao', label: 'Serviço Classificação' },
        { link: 'habilitacao', label: 'Habilitação' },
        { link: 'redes', label: 'Redes' },
        { link: 'origem', label: 'Origem' },
        { link: 'regra-condicionada', label: 'Regra Condicionada' },
        { link: 'renases', label: 'Renases' },
        { link: 'tuss', label: 'TUSS' }
    ];

    constructor(private procedimentoFacade: ProcedimentoFacade) { }

    ngOnInit(): void {
        this.procedimentoFacade.loadProcedimento();
    }

}
