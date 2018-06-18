import { ComponentType } from './component-type';

export namespace Designer {
  export interface Component {
    type: ComponentType;
    displayType: string;

    appendToElement(element: JQuery<HTMLElement>): void;
  }
}
