import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/app/src/environments/environment';
import { ProcedimentoDescricao } from './procedimento-descricao.model';

@Injectable()
export class ProcedimentoDescricaoApi {

    readonly API = `${environment.apiUrl}/sigtap-descricao`;

    constructor(private http: HttpClient) { }

    getByCompetenciaIdProcedimento(competenciaId: number, procedimentoId: number): Observable<ProcedimentoDescricao> {
        return this.http.get<ProcedimentoDescricao>(`${this.API}/findOneByCompetenciaIdProcedimento/${competenciaId}/${procedimentoId}`);
    }
}
