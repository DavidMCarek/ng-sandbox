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
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

type AfterClosedCallback = (result: any) => any;

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
        (result as Designer.Component).appendToElement(this.selectedComponent.element);
      }
    };
    this.openDialog(AddComponentDialogComponent, null, callback);
  }

  public openDeleteComponentDialog(): void {
    const callback = result => {
      if (result) {
        this.selectedComponent.element.remove();
      }
    };
    this.openDialog(DeleteComponentDialogComponent, null, callback);
  }

  public openModifyGridDialog(): void {
    const data = { flexDirection: this.selectedComponent.element.css('flex-direction') };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.css('flex-direction', result);
      }
    };
    this.openDialog(ModifyGridDialogComponent, data, callback);
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
    this.openDialog(ColorPickerDialogComponent, data, callback);
  }

  public openEditTextDialog(): void {
    const data = { text: this.selectedComponent.element.text() };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.text(result);
      }
    };
    this.openDialog(EditTextDialogComponent, data, callback);
  }

  public openChangeFontSizeDialog(): void {
    const data = { fontSize: this.selectedComponent.element.css('font-size') };
    const callback = result => {
      if (result) {
        this.selectedComponent.element.css('font-size', result);
      }
    };
    this.openDialog(ChangeFontSizeDialogComponent, data, callback);
  }

  private openDialog(dialog: ComponentType<{}>, data: Object, callback: AfterClosedCallback) {
    const dialogRef = this.matDialog.open(dialog, { data: data });
    dialogRef.afterClosed().subscribe(callback);
  }
}
