import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { UntypedFormControl } from '@angular/forms';
import { format, isValid } from 'date-fns';

import { CompetenciasFacade } from '../../../core/competencias/competencias.facade';
import { ImporterFacade } from '../../sigtap/importer/importer.facade';
import { Competencia } from '../../../core/competencias/competencia.model';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { NgxDateFnsDateAdapter } from 'ngx-mat-datefns-date-adapter';
import { ErrorDialogComponent, ErrorDialogModel } from '../../../shared/error-dialog/error-dialog.component';

export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/yyyy',
    },
    display: {
        dateInput: 'MM/yyyy',
        monthYearLabel: 'MMM yyyy',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM yyyy',
    },
};

@Component({
    selector: 'ts-competencias',
    templateUrl: './competencias.component.html',
    styleUrls: ['./competencias.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: DateAdapter, useClass: NgxDateFnsDateAdapter
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ]
})
export class CompetenciasComponent implements AfterViewInit, OnDestroy {
    competenciaSelectedId: number | null = null;
    competencias$ = this.competenciasFacade.competencias$;
    displayedColumns: string[] = ['select', 'mesAnoDisplay'];
    dataSource = new MatTableDataSource<Competencia>();
    subscription: Subscription = new Subscription();
    selection = new SelectionModel<Competencia>(true, []);
    dateCompetencia = new UntypedFormControl(new Date());

    @ViewChild(MatDatepicker) dp?: MatDatepicker<Date>;
    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @ViewChild(MatSort) sort?: MatSort;

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
                this.selection.clear();
            }
        });
    }

    importNew() {
        if (!isValid(this.dateCompetencia.value)) {
            const dialogData = new ErrorDialogModel('Ano/mês inválido', 'Verifique o mês/ano informado');

            this.dialog.open(ErrorDialogComponent, {
                maxWidth: '400px',
                data: dialogData
            });

            return;
        }

        const yearMonth = format(this.dateCompetencia.value, 'yyyyMM');
        this.importerFacade.importCompetencia(yearMonth);
    }

    chosenYearHandler(normalizedYear: Date) {
        const ctrlValue = this.dateCompetencia.value;
        ctrlValue.setFullYear(normalizedYear.getFullYear());
        this.dateCompetencia.setValue(ctrlValue);
    }

    chosenMonthHandler(normalizedMonth: Date, dp: MatDatepicker<Date>) {
        const ctrlValue = this.dateCompetencia.value;
        ctrlValue.setMonth(normalizedMonth.getMonth());
        this.dateCompetencia.setValue(ctrlValue);
        if (dp) {
            dp.close();
        }
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
