import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';
import { SigtapRoutingModule } from './sigtap-routing.module';
import { FEATURE_NAME, reducers } from './sigtap.state';
import { ProcedimentoApi } from './procedimento/procedimento.api';
import { ProcedimentoListComponent } from './procedimento-list/procedimento-list.component';
import { ProcedimentoComponent } from './procedimento/procedimento.component';
import { ProcedimentoFacade } from './procedimento/procedimento.facade';
import { ProcedimentoEffects } from './procedimento/procedimento.effects';
import { ProcedimentoDetalheComponent } from './procedimento-detalhe/procedimento-detalhe.component';
import { ProcedimentoCidComponent } from './procedimento-cid/component/procedimento-cid.component';
import { ProcedimentoCidApi } from './procedimento-cid/procedimento-cid.api';
import { ProcedimentoCidEffects } from './procedimento-cid/procedimento-cid.effects';
import { ProcedimentoCidFacade } from './procedimento-cid/procedimento-cid.facade';
import { ProcedimentoDescricaoComponent } from './procedimento-descricao/component/procedimento-descricao/procedimento-descricao.component';
import { ProcedimentoDescricaoEffects } from './procedimento-descricao/procedimento-descricao.effects';
import { ProcedimentoDescricaoApi } from './procedimento-descricao/procedimento-descricao.api';
import { ProcedimentoDescricaoFacade } from './procedimento-descricao/procedimento-descricao.facade';
import { ImporterApi } from './importer/importer.api';
import { ImporterFacade } from './importer/importer.facade';
import { ImporterEffects } from './importer/importer.effects';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        EffectsModule.forFeature([
            ProcedimentoEffects,
            ProcedimentoCidEffects,
            ProcedimentoDescricaoEffects,
            ImporterEffects
        ]),
        StoreModule.forFeature(FEATURE_NAME, reducers),
        SigtapRoutingModule,
        ProcedimentoListComponent,
        ProcedimentoComponent,
        ProcedimentoDetalheComponent,
        ProcedimentoCidComponent,
        ProcedimentoDescricaoComponent
    ],
    providers: [
        ProcedimentoApi,
        ProcedimentoCidApi,
        ProcedimentoDescricaoApi,
        ProcedimentoFacade,
        ProcedimentoCidFacade,
        ProcedimentoDescricaoFacade,
        ImporterApi,
        ImporterFacade
    ]
})
export class SigtapModule { }
