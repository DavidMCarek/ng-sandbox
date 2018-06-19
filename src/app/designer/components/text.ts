import { Designer } from './component';

export class Text implements Designer.Component {
  public type = Designer.ComponentType.Text;
  public displayType = Designer.ComponentType.Text.toString();

  constructor() { }

  appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<p class="text">Some sample text</p>');
  }
}
