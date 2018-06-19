import 'rxjs/add/operator/takeUntil';

import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { SelectedComponent } from '../selectedComponent';
import { Option } from './option';
import { OptionType } from './option-type';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit, OnDestroy {

  @Input() public option: Option;
  @Input() public selectedComponent: Observable<SelectedComponent>;

  @Output() public optionSelected = new EventEmitter<OptionType>();

  public isEnabled = false;

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.option.isEnabled.takeUntil(this.unsubscribe).subscribe(enabled => this.isEnabled = enabled);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onOptionClick() {
    this.optionSelected.emit(this.option.type);
  }
}
