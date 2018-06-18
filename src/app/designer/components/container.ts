import { Designer } from './component';
import { ComponentType } from './component-type';

export class Container implements Designer.Component {
  public readonly type = ComponentType.Container;
  public readonly displayType = ComponentType.Container.toString();

  constructor() { }

  public appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<div class="container" style="flex-direction: column; padding: 25px;"></div>');
  }
}
