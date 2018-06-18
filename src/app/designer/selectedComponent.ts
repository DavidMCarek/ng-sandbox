import { ComponentType } from './components/component-type';

export class SelectedComponent {
  private _element: JQuery<HTMLElement>;
  private _type: ComponentType;

  constructor(element: JQuery<HTMLElement>) {
    this._element = element;

    if (this._element.is('.container')) {
      this._type = ComponentType.Container;
    } else if (this._element.is('.text')) {
      this._type = ComponentType.Text;
    } else if (this._element.is('#Designer')) {
      this._type = ComponentType.Designer;
    }
  }

  public get element(): JQuery<HTMLElement> {
    return this._element;
  }

  public get type(): ComponentType {
    return this._type;
  }
}
