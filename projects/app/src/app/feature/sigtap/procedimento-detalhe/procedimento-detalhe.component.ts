import { Component, OnInit } from '@angular/core';
import { ProcedimentoFacade } from '../procedimento/procedimento.facade';

@Component({
  selector: 'ts-procedimento-detalhe',
  templateUrl: './procedimento-detalhe.component.html',
  styleUrls: ['./procedimento-detalhe.component.scss']
})
export class ProcedimentoDetalheComponent implements OnInit {
  procedimento$ = this.procedimentoFacade.procedimento$;

  constructor(private procedimentoFacade: ProcedimentoFacade) { }

  ngOnInit(): void {
  }

}
