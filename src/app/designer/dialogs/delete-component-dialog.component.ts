import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-component-dialog',
  templateUrl: './delete-component-dialog.component.html',
  styleUrls: ['./delete-component-dialog.component.css']
})
export class DeleteComponentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponentDialogComponent>
  ) { }

  public onDeleteClick(): void {
    this.dialogRef.close(true);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}
