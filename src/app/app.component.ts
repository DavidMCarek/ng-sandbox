import { Component, OnInit } from '@angular/core';

import { AppRoutes } from './app-routes';
import { Route } from './shared/route';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public navRoutes: Route[];

  ngOnInit(): void {
    this.navRoutes = AppRoutes.list();
  }
}
