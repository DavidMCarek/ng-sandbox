import { Designer } from '../components/component';

export class SelectedComponent {
  private _element: JQuery<HTMLElement>;
  private _type: Designer.ComponentType;

  constructor(element: JQuery<HTMLElement>) {
    this._element = element;

    if (this._element.is('.container')) {
      this._type = Designer.ComponentType.Container;
    } else if (this._element.is('.text')) {
      this._type = Designer.ComponentType.Text;
    } else if (this._element.is('#Designer')) {
      this._type = Designer.ComponentType.Designer;
    }
  }

  public get element(): JQuery<HTMLElement> {
    return this._element;
  }

  public get type(): Designer.ComponentType {
    return this._type;
  }
}
