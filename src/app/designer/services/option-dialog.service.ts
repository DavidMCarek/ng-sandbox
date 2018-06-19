import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddComponentDialogComponent } from '../dialogs/add-component-dialog.component';
import { SelectedComponent } from '../selectedComponent';
import { Designer } from '../components/component';
import { ComponentType } from '../components/component-type';
import { DeleteComponentDialogComponent } from '../dialogs/delete-component-dialog.component';
import { ModifyGridDialogComponent } from '../dialogs/modify-grid-dialog.component';
import { ColorPickerDialogComponent } from '../dialogs/color-picker-dialog.component';
import { EditTextDialogComponent } from '../dialogs/edit-text-dialog.component';
import { ChangeFontSizeDialogComponent } from '../dialogs/change-font-size-dialog.component';

@Injectable()
export class OptionDialogService {

  private _selectedComponent: SelectedComponent;

  constructor(
    public addComponentDialog: MatDialog,
    public deleteComponentDialog: MatDialog,
    public modifyGridDialog: MatDialog,
    public colorPickerDialog: MatDialog,
    public editTextDialog: MatDialog,
    public changeFontSizeDialog: MatDialog
  ) { }

  public set selectedComponent(selectedComponent: SelectedComponent) {
    this._selectedComponent = selectedComponent;
  }

  public openAddComponentDialog(): void {
    const dialogRef = this.addComponentDialog.open(AddComponentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (this._selectedComponent.element.length === 1) {
        (result as Designer.Component).appendToElement(this._selectedComponent.element);
        return;
      }

      (result as Designer.Component).appendToElement(this._selectedComponent.element);
    });
  }

  public openDeleteComponentDialog(): void {
    const dialogRef = this.deleteComponentDialog.open(DeleteComponentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      if (this._selectedComponent.type === ComponentType.Designer) {
        return;
      }

      this._selectedComponent.element.remove();
    });
  }

  public openModifyGridDialog(): void {
    const dialogRef = this.modifyGridDialog.open(ModifyGridDialogComponent, {
      data: {
        flexDirection: this._selectedComponent.element.css('flex-direction')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._selectedComponent.element.css('flex-direction', result);
    });
  }

  public openColorPickerDialog(): void {
    const dialogRef = this.colorPickerDialog.open(ColorPickerDialogComponent, {
      data: {
        color: this._selectedComponent.element.css('color'),
        backgroundColor: this._selectedComponent.element.css('background-color')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._selectedComponent.element.css('color', result.color);
      this._selectedComponent.element.css('background-color', result.backgroundColor);
    });
  }

  public openEditTextDialog(): void {
    const dialogRef = this.editTextDialog.open(EditTextDialogComponent, {
      data: {
        text: this._selectedComponent.element.text()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._selectedComponent.element.text(result);
    });
  }

  public openChangeFontSizeDialog(): void {
    const dialogRef = this.changeFontSizeDialog.open(ChangeFontSizeDialogComponent, {
      data: {
        fontSize: this._selectedComponent.element.css('font-size')
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this._selectedComponent.element.css('font-size', result);
    });
  }
}
