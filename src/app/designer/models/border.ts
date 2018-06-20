export class Border {

  public style: Border.Style;
  public width: number;
  public color: string;
  public sides: Border.Side[];

  constructor() { }
}

export namespace Border {
  export enum Style {
    Hidden,
    Dotted,
    Dashed,
    Solid,
    Double,
    Groove,
    Ridge,
    Inset,
    Outset
  }

  export enum Side {
    Top,
    Right,
    Bottom,
    Left
  }
}
