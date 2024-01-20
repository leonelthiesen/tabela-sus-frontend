import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/app/src/environments/environment';
import { Procedimento } from './procedimento.model';

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoApi {

    readonly API = `${environment.apiUrl}/sigtap-procedimento`;

    constructor(private http: HttpClient) { }

    getByCompetenciaIdNome(competenciaId: number, filter: string): Observable<Procedimento[]> {
        return this.http.get<Procedimento[]>(`${this.API}/findByCompetenciaIdNome/${competenciaId}/${filter}`);
    }

    getByCompetenciaIdProcedimentoCodigo(competenciaId: number, procedimentoCodigo: string): Observable<Procedimento> {
        return this.http.get<Procedimento>(`${this.API}/findOneByCompetenciaIdCodigo/${competenciaId}/${procedimentoCodigo}`);
    }
}
