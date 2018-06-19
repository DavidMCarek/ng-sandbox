export namespace Designer {
  export enum ComponentType {
    Container = 'Container',
    Text = 'Text',
    Designer = 'Designer'
  }
  export interface Component {
    type: ComponentType;
    displayType: string;

    appendToElement(element: JQuery<HTMLElement>): void;
  }
}
