import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { SelectedComponent } from '../selectedComponent';
import { OptionDialogService } from '../services/option-dialog.service';
import { Option } from './option';
import { OptionType } from './option-type';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit, OnDestroy {

  @Input()
  public option: Option;

  @Input()
  public selectedComponent: Observable<SelectedComponent>;

  public isEnabled = false;

  private unsubscribe = new Subject<void>();

  constructor(public dialogService: OptionDialogService) { }

  ngOnInit(): void {
    this.option.isEnabled.takeUntil(this.unsubscribe).subscribe(enabled => this.isEnabled = enabled);
    this.dialogService.subscribeToSelectedComponent(this.selectedComponent);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.dialogService.unsubscribeFromSelectedComponent();
  }

  public onOptionClick() {
    switch (this.option.type) {
      case OptionType.AddComponent: {
        this.dialogService.openAddComponentDialog();
        break;
      }
      case OptionType.ModifyGrid: {
        this.dialogService.openModifyGridDialog();
        break;
      }
      case OptionType.DeleteComponent: {
        this.dialogService.openDeleteComponentDialog();
        break;
      }
      case OptionType.ChangeColor: {
        this.dialogService.openColorPickerDialog();
        break;
      }
      case OptionType.EditText: {
        this.dialogService.openEditTextDialog();
        break;
      }
      case OptionType.ChangeFontSize: {
        this.dialogService.openChangeFontSizeDialog();
        break;
      }
    }
  }
}
