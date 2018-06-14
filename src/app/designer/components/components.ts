import { Container } from './container';
import { Text } from './text';

export class Components {
  public static getAll(): Designer.Component[] {
    return [
      new Container(),
      new Text()
    ];
  }
}
