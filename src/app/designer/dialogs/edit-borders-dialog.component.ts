import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Border } from '../models/border';

@Component({
  selector: 'app-edit-borders-dialog',
  templateUrl: './edit-borders-dialog.component.html',
  styleUrls: ['./edit-borders-dialog.component.css']
})
export class EditBordersDialogComponent implements OnInit {

  public styles = Object.keys(Border.Style).filter(key => isNaN(Number(key)));

  public selectedStyle: string;
  public borderColor: string;
  public borderWidth: string;

  constructor(
    public dialogRef: MatDialogRef<EditBordersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onSaveClick(style: string) {
    this.dialogRef.close();
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
