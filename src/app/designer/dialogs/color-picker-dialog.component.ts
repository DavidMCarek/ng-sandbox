import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.css']
})
export class ColorPickerDialogComponent {

  public color: string;
  public backgroundColor: string;

  constructor(
    public dialogRef: MatDialogRef<ColorPickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.color = data.color;
    this.backgroundColor = data.backgroundColor;
  }

  public onSaveClick() {
    this.dialogRef.close({
      color: this.color,
      backgroundColor: this.backgroundColor
    });
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
