import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
