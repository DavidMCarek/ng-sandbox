import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { DesignerComponent } from './designer.component';
import { AddComponentDialogComponent } from './dialogs/add-component-dialog.component';
import { CommonModule } from '@angular/common';
import { ModifyGridDialogComponent } from './dialogs/modify-grid-dialog.component';
import { DeleteComponentDialogComponent } from './dialogs/delete-component-dialog.component';

@NgModule({
  declarations: [
    AddComponentDialogComponent,
    DesignerComponent,
    ModifyGridDialogComponent,
    DeleteComponentDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DesignerComponent
  ],
  entryComponents: [
    AddComponentDialogComponent,
    ModifyGridDialogComponent,
    DeleteComponentDialogComponent
  ]
})
export class DesignerModule { }
