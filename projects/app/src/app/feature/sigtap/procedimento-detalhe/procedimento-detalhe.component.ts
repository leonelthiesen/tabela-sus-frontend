import { Component, OnInit } from '@angular/core';
import { ProcedimentoFacade } from '../procedimento/procedimento.facade';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'ts-procedimento-detalhe',
    templateUrl: './procedimento-detalhe.component.html',
    styleUrls: ['./procedimento-detalhe.component.scss'],
    standalone: true,
    imports: [AsyncPipe, CurrencyPipe]
})
export class ProcedimentoDetalheComponent implements OnInit {
  procedimento$ = this.procedimentoFacade.procedimento$;

  constructor(private procedimentoFacade: ProcedimentoFacade) { }

  ngOnInit(): void {
  }

}
