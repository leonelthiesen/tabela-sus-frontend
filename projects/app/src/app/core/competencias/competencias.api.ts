import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/app/src/environments/environment';
import { Competencia } from './competencia.model';

@Injectable({
    providedIn: 'root'
})
export class CompetenciasApi {

    readonly API = `${environment.apiUrl}/sigtap-competencia`;

    constructor(private http: HttpClient) { }

    getCompetencias(): Observable<Competencia[]> {
        return this.http.get<Competencia[]>(this.API);
    }
}
