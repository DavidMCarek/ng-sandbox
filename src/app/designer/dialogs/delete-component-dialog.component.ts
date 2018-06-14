import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-component-dialog',
  templateUrl: './delete-component-dialog.component.html',
  styleUrls: ['./delete-component-dialog.component.css']
})
export class DeleteComponentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onDeleteClick(): void {
    this.dialogRef.close(true);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
