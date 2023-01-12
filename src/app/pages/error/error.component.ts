import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'sp-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements AfterViewInit {
  get errorCode(): string {
    return 'E001';
  }
  get errorDetail(): string {
    return 'Error occured';
  }

  constructor(private dialogRef: MatDialog, private matBottomSheet: MatBottomSheet) {}

  ngAfterViewInit() {
    this.dialogRef.closeAll();
    this.matBottomSheet.dismiss();
  }
}
