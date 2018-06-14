import { Container } from './container';
import { Input } from './input';

export class Components {
  public static getAll(): Designer.Component[] {
    return [
      new Container(),
      new Input()
    ];
  }
}
