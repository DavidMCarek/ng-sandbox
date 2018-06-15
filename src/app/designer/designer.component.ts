import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as $ from 'jquery';

import { AddComponentDialogComponent } from './dialogs/add-component-dialog.component';
import { DeleteComponentDialogComponent } from './dialogs/delete-component-dialog.component';
import { ModifyGridDialogComponent } from './dialogs/modify-grid-dialog.component';
import { ColorPickerDialogComponent } from './dialogs/color-picker-dialog.component';

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
  public isContainerSelected = false;
  public isTextSelected = false;

  constructor(
    public addComponentDialog: MatDialog,
    public deleteComponentDialog: MatDialog,
    public modifyGridDialog: MatDialog,
    public colorPickerDialog: MatDialog
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
      if ($(event.target).parents('#Designer').length > 0 || $(event.target).is('#Designer')) {
        $('#Designer .selected').removeClass('selected');
        this.selectedComponent = $(event.target).addClass('selected');
        this.updateSelections();
      }
    });
  }

  public openAddComponentDialog(): void {
    const dialogRef = this.addComponentDialog.open(AddComponentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.updateSelections();
      if (this.isComponentSelected && this.selectedComponent.length === 1) {
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
    const dialogRef = this.modifyGridDialog.open(ModifyGridDialogComponent, {
      data: {
        flexDirection: this.selectedComponent.css('flex-direction')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.selectedComponent.css('flex-direction', result);
    });
  }

  public openColorPickerDialog(): void {
    const dialogRef = this.colorPickerDialog.open(ColorPickerDialogComponent, {
      data: {
        color: this.selectedComponent.css('color'),
        backgroundColor: this.selectedComponent.css('background-color')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.selectedComponent.css('color', result.color);
      this.selectedComponent.css('background-color', result.backgroundColor);
    });
  }

  public openEditTextDialog(): void {

  }

  public openChangeFontSizeDialog(): void {

  }

  private updateSelections(): void {
    this.updateIsComponentSelected();
    this.updateIsContainerSelected();
    this.updateIsTextSelected();
  }

  private updateIsComponentSelected(): void {
    this.isComponentSelected = $('#Designer .selected').length > 0;
  }

  private updateIsContainerSelected(): void {
    this.isContainerSelected = $('#Designer .container.selected').length > 0;
  }

  private updateIsTextSelected(): void {
    this.isTextSelected = $('#Designer .text.selected').length > 0;
  }
}
