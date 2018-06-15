import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modify-grid-dialog',
  templateUrl: './modify-grid-dialog.component.html',
  styleUrls: ['./modify-grid-dialog.component.css']
})
export class ModifyGridDialogComponent {

  public selectedOrientation: Orientation;
  public orientations: Orientation[];

  constructor(
    public dialogRef: MatDialogRef<ModifyGridDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.orientations = [new Orientation('row'), new Orientation('column')];
    this.selectedOrientation = this.orientations.find(o => o.flexDirection === data.flexDirection);
  }

  public onSaveClick(): void {
    this.dialogRef.close(this.selectedOrientation.flexDirection);
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }
}

class Orientation {
  public visualDirection: string;

  constructor (public flexDirection: string) {
    if (flexDirection === 'row') {
      this.visualDirection = 'Column';
    } else {
      this.visualDirection = 'Row';
    }
  }
}
