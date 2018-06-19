import { Designer } from './component';

export class Image implements Designer.Component {
  public type = Designer.ComponentType.Image;
  public displayType = Designer.ComponentType.Image.toString();

  constructor() { }

  appendToElement(element: JQuery<HTMLElement>, data: any): void {
    element.append('<img src="' + data.imageSrc  + '"/>');
  }
}
