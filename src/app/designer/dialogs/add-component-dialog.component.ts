import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Components } from '../components/components';
import { Designer } from '../components/component';

@Component({
  selector: 'app-add-component-dialog',
  templateUrl: './add-component-dialog.component.html',
  styleUrls: ['./add-component-dialog.component.css']
})
export class AddComponentDialogComponent implements OnInit {

  public components: Designer.Component[];
  public selected: Designer.Component;

  constructor(
    public dialogRef: MatDialogRef<AddComponentDialogComponent>
  ) { }

  ngOnInit(): void {
    this.components = Components.getAll();
    this.selected = this.components[0];
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onAddComponentClick(): void {
    this.dialogRef.close(this.selected);
  }
}
