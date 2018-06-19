import { Designer } from './component';

export class Container implements Designer.Component {
  public readonly type = Designer.ComponentType.Container;
  public readonly displayType = Designer.ComponentType.Container.toString();

  constructor() { }

  public appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<div class="container" style="flex-direction: column; padding: 25px;"></div>');
  }
}
