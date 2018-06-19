import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-borders-dialog',
  templateUrl: './edit-borders-dialog.component.html',
  styleUrls: ['./edit-borders-dialog.component.css']
})
export class EditBordersDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditBordersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onSaveClick() {
    this.dialogRef.close();
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
