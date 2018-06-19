import { Observable } from 'rxjs';

import { OptionType } from './option-type';

export class Option {
  public readonly tooltip: string;

  constructor(
    public readonly type: OptionType,
    public readonly isEnabled: Observable<boolean>,
    public readonly icon: string
  ) {
    this.tooltip = type.toString();
  }
}
