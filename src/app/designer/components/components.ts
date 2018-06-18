import { Container } from './container';
import { Text } from './text';
import { Designer } from './component';

export class Components {
  public static getAll(): Designer.Component[] {
    return [
      new Container(),
      new Text()
    ];
  }
}
