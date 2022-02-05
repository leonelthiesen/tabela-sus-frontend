import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'ts-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.css']
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
