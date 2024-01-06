import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Subscription } from 'rxjs';

import { ProcedimentoCidFacade } from '../procedimento-cid.facade';
import { ProcedimentoCid } from '../procedimento-cid.model';

@Component({
    selector: 'ts-procedimento-cid',
    templateUrl: './procedimento-cid.component.html',
    styleUrls: ['./procedimento-cid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcedimentoCidComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['codigo', 'nome'];
    dataSource = new MatTableDataSource<ProcedimentoCid>();
    subscription: Subscription = new Subscription();
    loading$ = this.procedimentoCidFacade.loading$;

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

    constructor(private procedimentoCidFacade: ProcedimentoCidFacade) { }

    ngOnInit(): void {
        this.procedimentoCidFacade.loadProcedimentoCid();

        this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'codigo': return item.cid.codigo;
                default: return item.cid.nome;
            }
        };

        this.dataSource.filterPredicate = (data, filter) => {
            const cid = data.cid.codigo.toLowerCase();
            const nome = data.cid.nome.toLowerCase();
            return (cid.includes(filter) || nome.includes(filter));
        };

        this.subscription = this.procedimentoCidFacade.procedimentoCid$.subscribe((procedimentosCid: ProcedimentoCid[]) => {
            this.dataSource.data = procedimentosCid;
            if (this.sort) {
                this.dataSource.sort = this.sort;
            }
            if (this.paginator) {
                this.dataSource.paginator = this.paginator;
            }
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
