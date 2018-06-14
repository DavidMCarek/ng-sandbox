import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';

import { AddComponentDialogComponent } from './dialogs/add-component-dialog.component';
import { DeleteComponentDialogComponent } from './dialogs/delete-component-dialog.component';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
})
export class DesignerComponent implements AfterViewInit {
  @HostBinding('class')
  private designerClass = 'router-child';

  private selectedComponent: JQuery<HTMLElement>;

  public isComponentSelected = false;

  constructor(
    public addComponentDialog: MatDialog,
    public deleteComponentDialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.selectedComponent = $('#Designer');

    $(document).mousemove(event => {
      $('#Designer .hover').removeClass('hover');
      if ($(event.target).parents('#Designer').length > 0) {
        $(event.target).addClass('hover');
      }
    });

    $(document).click(event => {
      const isClickOnOptions = $(event.target).parents('#Options').length > 0 || $(event.target).is('#Options');
      const isClickOnDialog = $(event.target).parents('mat-dialog-container').length > 0 || $(event.target).is('mat-dialog-container');
      if (isClickOnOptions || isClickOnDialog) {
        return;
      }

      $('#Designer .selected').removeClass('selected');
      if ($(event.target).parents('#Designer').length > 0 || $(event.target).is('#Designer')) {
        this.selectedComponent = $(event.target).addClass('selected');
        this.updateIsComponentSelected();
      }
    });
  }

  public openAddComponentDialog(): void {
    const dialogRef = this.addComponentDialog.open(AddComponentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (this.selectedComponent.length === 1) {
        (result as Designer.Component).appendToElement(this.selectedComponent);
        return;
      }

      this.selectedComponent = $('#Designer');
      (result as Designer.Component).appendToElement(this.selectedComponent);
    });
  }

  public openDeleteComponentDialog(): void {
    const dialogRef = this.deleteComponentDialog.open(DeleteComponentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (this.selectedComponent.is('#Designer')) {
        return;
      }

      this.selectedComponent.remove();
    });
  }

  public openModifyGridDialog(): void {

  }

  public openColorPickerDialog(): void {

  }

  private updateIsComponentSelected() {
    this.isComponentSelected = $('#Designer .selected').length > 0;
  }
}
