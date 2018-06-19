export namespace Designer {
  export enum ComponentType {
    Container = 'Container',
    Text = 'Text',
    Image = 'Image',
    Designer = 'Designer'
  }
  export interface Component {
    type: ComponentType;
    displayType: string;

    appendToElement(element: JQuery<HTMLElement>, data: any): void;
  }
}
