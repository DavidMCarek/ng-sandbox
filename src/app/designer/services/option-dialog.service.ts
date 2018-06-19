import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddComponentDialogComponent } from '../dialogs/add-component-dialog.component';
import { SelectedComponent } from '../selectedComponent';
import { Designer } from '../components/component';
import { DeleteComponentDialogComponent } from '../dialogs/delete-component-dialog.component';
import { ModifyGridDialogComponent } from '../dialogs/modify-grid-dialog.component';
import { ColorPickerDialogComponent } from '../dialogs/color-picker-dialog.component';
import { EditTextDialogComponent } from '../dialogs/edit-text-dialog.component';
import { ChangeFontSizeDialogComponent } from '../dialogs/change-font-size-dialog.component';
import { ComponentType } from '@angular/cdk/portal';

type AfterClosedCallback = (result: any) => any;

@Injectable()
export class OptionDialogService {

  private _selectedComponent: SelectedComponent;

  constructor(
    public matDialog: MatDialog
  ) { }

  public set selectedComponent(selectedComponent: SelectedComponent) {
    this._selectedComponent = selectedComponent;
  }

  public openAddComponentDialog(): void {
    const callback = result => {
      if (result) {
        (result as Designer.Component).appendToElement(this._selectedComponent.element);
      }
    };
    this.openDialog(AddComponentDialogComponent, null, callback);
  }

  public openDeleteComponentDialog(): void {
    const callback = result => {
      if (result) {
        this._selectedComponent.element.remove();
      }
    };
    this.openDialog(DeleteComponentDialogComponent, null, callback);
  }

  public openModifyGridDialog(): void {
    const data = { flexDirection: this._selectedComponent.element.css('flex-direction') };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('flex-direction', result);
      }
    };
    this.openDialog(ModifyGridDialogComponent, data, callback);
  }

  public openColorPickerDialog(): void {
    const data = {
      color: this._selectedComponent.element.css('color'),
      backgroundColor: this._selectedComponent.element.css('background-color')
    };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('color', result.color);
        this._selectedComponent.element.css('background-color', result.backgroundColor);
      }
    };
    this.openDialog(ColorPickerDialogComponent, data, callback);
  }

  public openEditTextDialog(): void {
    const data = { text: this._selectedComponent.element.text() };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.text(result);
      }
    };
    this.openDialog(EditTextDialogComponent, data, callback);
  }

  public openChangeFontSizeDialog(): void {
    const data = { fontSize: this._selectedComponent.element.css('font-size') };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('font-size', result);
      }
    };
    this.openDialog(ChangeFontSizeDialogComponent, data, callback);
  }

  private openDialog(dialog: ComponentType<{}>, data: Object, callback: AfterClosedCallback) {
    const dialogRef = this.matDialog.open(dialog, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }
}
