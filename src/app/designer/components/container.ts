export class Container implements Designer.Component {
  public readonly type = 'Container';
  public readonly displayType = 'Container';
  public children: Designer.Component[];

  constructor() { }

  public appendToElement(element: JQuery<HTMLElement>): void {
    element.append('<div class="container" style="flex-direction: column; padding: 25px;"></div>');
  }
}
