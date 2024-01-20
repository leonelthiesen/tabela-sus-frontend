import { Routes } from '@angular/router';

import { ProcedimentoListComponent } from './procedimento-list/procedimento-list.component';
import { ProcedimentoComponent } from './procedimento/procedimento.component';
import { ProcedimentoDetalheComponent } from './procedimento-detalhe/procedimento-detalhe.component';
import { ProcedimentoCidComponent } from './procedimento-cid/component/procedimento-cid.component';
import { ProcedimentoDescricaoComponent } from './procedimento-descricao/component/procedimento-descricao/procedimento-descricao.component';

export const SIGTAP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'search' },
    { path: 'search', component: ProcedimentoListComponent, data: { title: 'Pesquisa' } },
    {
        path: 'procedimento/:codigoProcedimento',
        component: ProcedimentoComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'detalhe' },
            { path: 'detalhe', component: ProcedimentoDetalheComponent, data: { title: 'Detalhe' } },
            { path: 'descricao', component: ProcedimentoDescricaoComponent, data: { title: 'Descrição' } },
            { path: 'cid', component: ProcedimentoCidComponent, data: { title: 'CID' } }
        ]
    }
];
