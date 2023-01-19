import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

import { Goods } from 'src/app/models/goods.model';

@Component({
  selector: 'np-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.scss']
})
export class SampleDialogComponent {
  animal: string;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { goods: Goods }) {}
}
