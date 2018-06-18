import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { MaterialModule } from '../material.module';
import { DesignerComponent } from './designer.component';
import { AddComponentDialogComponent } from './dialogs/add-component-dialog.component';
import { ColorPickerDialogComponent } from './dialogs/color-picker-dialog.component';
import { DeleteComponentDialogComponent } from './dialogs/delete-component-dialog.component';
import { EditTextDialogComponent } from './dialogs/edit-text-dialog.component';
import { ModifyGridDialogComponent } from './dialogs/modify-grid-dialog.component';
import { OptionDialogService } from './services/option-dialog.service';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AddComponentDialogComponent,
    DesignerComponent,
    ModifyGridDialogComponent,
    DeleteComponentDialogComponent,
    ColorPickerDialogComponent,
    EditTextDialogComponent,
    OptionComponent
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
    ColorPickerDialogComponent,
    EditTextDialogComponent
  ],
  providers: [
    OptionDialogService
  ]
})
export class DesignerModule { }
