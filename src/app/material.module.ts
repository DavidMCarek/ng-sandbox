import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
