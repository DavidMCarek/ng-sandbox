export class Text implements Designer.Component {
  public type = 'text';
  public displayType = 'Text';

  constructor() { }

  appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<p class="text">Some sample text</p>');
  }
}
