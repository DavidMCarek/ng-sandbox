import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-font-size-dialog',
  templateUrl: './change-font-size-dialog.component.html',
  styleUrls: ['./change-font-size-dialog.component.css']
})
export class ChangeFontSizeDialogComponent implements OnInit {

  public fontSize: string;

  constructor(
    public dialogRef: MatDialogRef<ChangeFontSizeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fontSize = data.fontSize;
  }

  ngOnInit() {
  }

  public onSaveClick() {
    this.dialogRef.close(this.fontSize);
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
