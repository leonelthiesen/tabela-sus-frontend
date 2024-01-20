import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/app/src/environments/environment';
import { ProcedimentoCid } from './procedimento-cid.model';

@Injectable({
    providedIn: 'root'
})
export class ProcedimentoCidApi {

    readonly API = `${environment.apiUrl}/sigtap-procedimento-cid`;

    constructor(private http: HttpClient) { }

    getByCompetenciaIdProcedimento(competenciaId: number, procedimentoId: number): Observable<ProcedimentoCid[]> {
        return this.http.get<ProcedimentoCid[]>(`${this.API}/findByCompetenciaIdProcedimento/${competenciaId}/${procedimentoId}`);
    }
}
