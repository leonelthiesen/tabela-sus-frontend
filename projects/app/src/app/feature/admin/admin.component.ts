import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';

import { CompetenciasFacade } from '../../core/competencias/competencias.facade';
import { ImporterFacade } from '../sigtap/importer/importer.facade';
import { Competencia } from '../../core/competencias/competencia.model';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'ts-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements AfterViewInit, OnDestroy {
    competenciaSelectedId: number | null = null;
    competencias$ = this.competenciasFacade.competencias$;
    displayedColumns: string[] = ['select', 'mesAnoDisplay'];
    dataSource = new MatTableDataSource<Competencia>();
    subscription: Subscription = new Subscription();
    selection = new SelectionModel<Competencia>(true, []);

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

    adminOptions = [
        { link: 'competencias', label: 'Competências' }
    ];

    constructor(private competenciasFacade: CompetenciasFacade, private importerFacade: ImporterFacade, public dialog: MatDialog) { }

    ngAfterViewInit() {
        this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'mesAnoDisplay': return item.anoMesCompetencia;
                default: return item.anoMesCompetencia;
            }
        };

        this.subscription = this.competenciasFacade.competencias$.subscribe((competencias: Competencia[]) => {
            this.dataSource.data = competencias;
            if (this.sort) {
                this.dataSource.sort = this.sort;
            }
            if (this.paginator) {
                this.dataSource.paginator = this.paginator;
            }
        });
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    checkboxLabel(row?: Competencia): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.anoMesCompetencia}`;
    }

    remove() {
        const selectedAnoMesCompetencias = this.selection.selected.map(competencia => {
            return competencia.anoMesCompetencia;
        });

        const message = `Você tem certeza que deseja excluir as seguintes competências?\n\t${this.selection.selected.map((competencia) => competencia.mesAnoDisplay).join('\n\t')}`;

        const dialogData = new ConfirmDialogModel('Confirmação de exclusão', message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.importerFacade.removeCompetenciasWhenExist(selectedAnoMesCompetencias);
            }
        });
    }

    import(yearMonth: number) {

    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
