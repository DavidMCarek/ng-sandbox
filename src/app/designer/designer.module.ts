import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { DesignerComponent } from './designer.component';
import { AddComponentDialogComponent } from './dialogs/add-component-dialog.component';
import { CommonModule } from '@angular/common';
import { ModifyGridDialogComponent } from './dialogs/modify-grid-dialog.component';
import { DeleteComponentDialogComponent } from './dialogs/delete-component-dialog.component';
import { ColorPickerDialogComponent } from './dialogs/color-picker-dialog.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AddComponentDialogComponent,
    DesignerComponent,
    ModifyGridDialogComponent,
    DeleteComponentDialogComponent,
    ColorPickerDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ColorPickerModule
  ],
  exports: [
    DesignerComponent
  ],
  entryComponents: [
    AddComponentDialogComponent,
    ModifyGridDialogComponent,
    DeleteComponentDialogComponent,
    ColorPickerDialogComponent
  ]
})
export class DesignerModule { }
