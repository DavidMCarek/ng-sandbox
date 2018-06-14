namespace Designer {
  export interface Component {
    type: string;
    displayType: string;

    appendToElement(element: JQuery<HTMLElement>): void;
  }
}
