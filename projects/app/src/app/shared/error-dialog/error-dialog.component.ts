import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'ts-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.css'],
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule]
})
export class ErrorDialogComponent implements OnInit {
    title: string;
    message: string;

    constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ErrorDialogModel) {
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }

    ngOnInit() {
    }

    onClose(): void {
        this.dialogRef.close();
    }
}

export class ErrorDialogModel {
    constructor(public title: string, public message: string) {
    }
}
