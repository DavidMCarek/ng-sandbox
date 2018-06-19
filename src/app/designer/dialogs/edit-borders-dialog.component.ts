import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-borders-dialog',
  templateUrl: './edit-borders-dialog.component.html',
  styleUrls: ['./edit-borders-dialog.component.css']
})
export class EditBordersDialogComponent implements OnInit {

  public isAllSides = true;
  public isAllCorners = true;

  public border: string;
  public borderTop: string;
  public borderRight: string;
  public borderBottom: string;
  public borderLeft: string;

  public borderRadius: string;
  public borderTopLeftRadius: string;
  public borderTopRightRadius: string;
  public borderBottomRightRadius: string;
  public borderBottomLeftRadius: string;

  constructor(
    public dialogRef: MatDialogRef<EditBordersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.border = this.borderTop = data.borderTop;
    this.borderRight = data.borderRight;
    this.borderBottom = data.borderBottom;
    this.borderLeft = data.borderLeft;

    this.borderRadius = this.borderTopLeftRadius = data.borderTopLeftRadius;
    this.borderTopRightRadius = data.borderTopRightRadius;
    this.borderBottomRightRadius = data.borderBottomRightRadius;
    this.borderBottomLeftRadius = data.borderBottomLeftRadius;
  }

  ngOnInit() {
  }

  public onSaveClick() {
    this.dialogRef.close();
  }

  public onCancelClick() {
    this.dialogRef.close();
  }
}
