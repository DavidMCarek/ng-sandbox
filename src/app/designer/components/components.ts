import { Container } from './container';
import { Text } from './text';
import { Designer } from './component';
import { Image } from './image';

export class Components {
  public static getAll(): Designer.Component[] {
    return [
      new Container(),
      new Text(),
      new Image()
    ];
  }
}
