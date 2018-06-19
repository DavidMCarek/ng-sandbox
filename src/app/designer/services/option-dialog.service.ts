import 'rxjs/add/operator/takeUntil';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Designer } from '../components/component';
import { AddComponentDialogComponent } from '../dialogs/add-component-dialog.component';
import { ChangeFontSizeDialogComponent } from '../dialogs/change-font-size-dialog.component';
import { ColorPickerDialogComponent } from '../dialogs/color-picker-dialog.component';
import { DeleteComponentDialogComponent } from '../dialogs/delete-component-dialog.component';
import { EditTextDialogComponent } from '../dialogs/edit-text-dialog.component';
import { ModifyGridDialogComponent } from '../dialogs/modify-grid-dialog.component';
import { OptionType } from '../option/option-type';
import { SelectedComponent } from '../selectedComponent';
import { EditBordersDialogComponent } from '../dialogs/edit-borders-dialog.component';

@Injectable()
export class OptionDialogService {

  private _selectedComponent: SelectedComponent;

  constructor(
    public matDialog: MatDialog
  ) { }

  public set selectedComponent(selectedComponent: SelectedComponent) {
    this._selectedComponent = selectedComponent;
  }

  public openOptionDialog(optionType: OptionType) {
    switch (optionType) {
      case OptionType.AddComponent: {
        this.openAddComponentDialog();
        break;
      }
      case OptionType.ModifyGrid: {
        this.openModifyGridDialog();
        break;
      }
      case OptionType.DeleteComponent: {
        this.openDeleteComponentDialog();
        break;
      }
      case OptionType.ChangeColor: {
        this.openColorPickerDialog();
        break;
      }
      case OptionType.EditText: {
        this.openEditTextDialog();
        break;
      }
      case OptionType.ChangeFontSize: {
        this.openChangeFontSizeDialog();
        break;
      }
      case OptionType.EditBorders: {
        this.openEditBordersDialog();
        break;
      }
    }
  }

  private openAddComponentDialog(): void {
    const callback = result => {
      if (result) {
        (result.component as Designer.Component).appendToElement(this._selectedComponent.element, result.data);
      }
    };
    const dialogRef = this.matDialog.open(AddComponentDialogComponent, { minWidth: '350px' });
    dialogRef.afterClosed().subscribe(callback);
  }

  private openDeleteComponentDialog(): void {
    const callback = result => {
      if (result) {
        this._selectedComponent.element.remove();
      }
    };
    const dialogRef = this.matDialog.open(DeleteComponentDialogComponent);
    dialogRef.afterClosed().subscribe(callback);
  }

  private openModifyGridDialog(): void {
    const data = { flexDirection: this._selectedComponent.element.css('flex-direction') };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('flex-direction', result);
      }
    };
    const dialogRef = this.matDialog.open(ModifyGridDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }

  private openColorPickerDialog(): void {
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
    const dialogRef = this.matDialog.open(ColorPickerDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }

  private openEditTextDialog(): void {
    const data = { text: this._selectedComponent.element.text() };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.text(result);
      }
    };
    const dialogRef = this.matDialog.open(EditTextDialogComponent, {
      minWidth: '325px',
      data: data
    });
    dialogRef.afterClosed().subscribe(callback);
  }

  private openChangeFontSizeDialog(): void {
    const data = { fontSize: this._selectedComponent.element.css('font-size') };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('font-size', result);
      }
    };
    const dialogRef = this.matDialog.open(ChangeFontSizeDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }

  private openEditBordersDialog(): void {
    const data = {
      borderTop: this._selectedComponent.element.css('border-top'),
      borderRight: this._selectedComponent.element.css('border-right'),
      borderBottom: this._selectedComponent.element.css('border-bottom'),
      borderLeft: this._selectedComponent.element.css('border-left'),
      borderRadius: this._selectedComponent.element.css('border-radius')
    };
    const callback = result => {
      if (result) {
        this._selectedComponent.element.css('border-top', result.borderTop);
        this._selectedComponent.element.css('border-right', result.borderRight);
        this._selectedComponent.element.css('border-bottom', result.borderBottom);
        this._selectedComponent.element.css('border-left', result.borderLeft);
        this._selectedComponent.element.css('border-radius', result.borderRadius);
      }
    };
    const dialogRef = this.matDialog.open(EditBordersDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }
}
