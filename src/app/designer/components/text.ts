import { Designer } from './component';
import { ComponentType } from './component-type';

export class Text implements Designer.Component {
  public type = ComponentType.Text;
  public displayType = ComponentType.Text.toString();

  constructor() { }

  appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<p class="text">Some sample text</p>');
  }
}
