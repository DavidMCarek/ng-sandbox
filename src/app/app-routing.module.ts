import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DesignerComponent } from './designer/designer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app-routes';

const routes = [
  { path: AppRoutes.designer.value, component: DesignerComponent },
  { path: AppRoutes.home.value, component: HomeComponent },
  { path: '**', redirectTo: AppRoutes.home.value, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
