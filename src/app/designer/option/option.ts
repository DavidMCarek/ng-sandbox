import { Observable } from 'rxjs';

import { OptionType } from './option-type';

export class Option {
  constructor(
    public readonly type: OptionType,
    public readonly tooltip: string,
    public readonly isEnabled: Observable<boolean>,
    public readonly icon: string
  ) { }
}
