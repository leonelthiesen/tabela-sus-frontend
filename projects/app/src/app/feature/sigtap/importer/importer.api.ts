import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/app/src/environments/environment';

@Injectable()
export class ImporterApi {

    readonly API = `${environment.apiUrl}/sigtap-importer`;

    constructor(private http: HttpClient) { }

    removeCompetenciasWhenExist(anoMesCompetencias: string[]): Observable<void> {
        return this.http.delete<void>(`${this.API}/removeCompetencias/${anoMesCompetencias}`);
    }

    importCompetencia(anoMesCompetencia: string): Observable<void> {
        return this.http.get<void>(`${this.API}/import/${anoMesCompetencia}`);
    }
}
