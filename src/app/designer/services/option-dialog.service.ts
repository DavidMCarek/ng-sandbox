import 'rxjs/add/operator/takeUntil';

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';

import { Designer } from '../components/component';
import { AddComponentDialogComponent } from '../dialogs/add-component-dialog.component';
import { ChangeFontSizeDialogComponent } from '../dialogs/change-font-size-dialog.component';
import { ColorPickerDialogComponent } from '../dialogs/color-picker-dialog.component';
import { DeleteComponentDialogComponent } from '../dialogs/delete-component-dialog.component';
import { EditTextDialogComponent } from '../dialogs/edit-text-dialog.component';
import { ModifyGridDialogComponent } from '../dialogs/modify-grid-dialog.component';
import { SelectedComponent } from '../selectedComponent';

@Injectable()
export class OptionDialogService {

  private selectedComponent: SelectedComponent;
  private unsubscribe = new Subject<void>();

  constructor(
    public matDialog: MatDialog
  ) { }

  public subscribeToSelectedComponent(selectedComponent: Observable<SelectedComponent>) {
    selectedComponent.takeUntil(this.unsubscribe).subscribe(component => this.selectedComponent = component);
  }

  public unsubscribeFromSelectedComponent() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public openAddComponentDialog(): void {
    const callback = result => {
      if (result) {
        (result.component as Designer.Component).appendToElement(this.selectedComponent.element, result.data);
      }
    };
    const dialogRef = this.matDialog.open(AddComponentDialogComponent, { minWidth: '350px' });
    dialogRef.afterClosed().subscribe(callback);
  }

  public openDeleteComponentDialog(): void {
    const callback = result => {
      if (result) {
        this.selectedComponent.element.remove();
      }
    };
    const dialogRef = this.matDialog.open(DeleteComponentDialogComponent);
    dialogRef.afterClosed().subscribe(callback);
  }

  public openModifyGridDialog(): void {
    const data = { flexDirection: this.selectedComponent.element.css('flex-direction') };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.css('flex-direction', result);
      }
    };
    const dialogRef = this.matDialog.open(ModifyGridDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }

  public openColorPickerDialog(): void {
    const data = {
      color: this.selectedComponent.element.css('color'),
      backgroundColor: this.selectedComponent.element.css('background-color')
    };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.css('color', result.color);
        this.selectedComponent.element.css('background-color', result.backgroundColor);
      }
    };
    const dialogRef = this.matDialog.open(ColorPickerDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }

  public openEditTextDialog(): void {
    const data = { text: this.selectedComponent.element.text() };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.text(result);
      }
    };
    const dialogRef = this.matDialog.open(EditTextDialogComponent, {
      minWidth: '325px',
      data: data
    });
    dialogRef.afterClosed().subscribe(callback);
  }

  public openChangeFontSizeDialog(): void {
    const data = { fontSize: this.selectedComponent.element.css('font-size') };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.css('font-size', result);
      }
    };
    const dialogRef = this.matDialog.open(ChangeFontSizeDialogComponent, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }
}
