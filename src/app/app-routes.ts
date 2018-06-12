import { Route } from './shared/route';

export class AppRoutes {
  public static designer = new Route('Designer', 'designer');
  public static home = new Route('Home', '');

  public static list(): Route[] {
    return [ this.designer, this.home ];
  }
}
