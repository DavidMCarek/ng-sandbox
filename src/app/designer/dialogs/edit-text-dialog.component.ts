import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ModifyGridDialogComponent } from './modify-grid-dialog.component';

@Component({
  selector: 'app-edit-text-dialog',
  templateUrl: './edit-text-dialog.component.html',
  styleUrls: ['./edit-text-dialog.component.css']
})
export class EditTextDialogComponent {

  public text: string;

  constructor(
    public dialogRef: MatDialogRef<ModifyGridDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.text = this.data.text;
  }

  public onSaveClick() {
    this.dialogRef.close(this.text);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
