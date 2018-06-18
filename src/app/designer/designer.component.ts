import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnDestroy, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

import { OptionAvailability } from './option-availability';
import { Option } from './option/option';
import { OptionType } from './option/option-type';
import { SelectedComponent } from './selectedComponent';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
})
export class DesignerComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class')
  private designerClass = 'router-child';

  public selectedComponentSubject: Subject<SelectedComponent>;
  public options: Option[];

  public optionAvailability = new OptionAvailability();

  private unsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.options = [
      new Option(OptionType.AddComponent, 'Add Component', this.optionAvailability.canAddChildComponent, 'add'),
      new Option(OptionType.ModifyGrid, 'Modify Grid', this.optionAvailability.canModifyGrid, 'view_quilt'),
      new Option(OptionType.DeleteComponent, 'Delete Component', this.optionAvailability.canDeleteComponent, 'delete'),
      new Option(OptionType.ChangeColor, 'Change Color', this.optionAvailability.canChangeColor, 'format_color_fill'),
      new Option(OptionType.EditText, 'Edit Text', this.optionAvailability.canEditText, 'edit'),
      new Option(OptionType.ChangeFontSize, 'Change Font Size', this.optionAvailability.canChangeFontSize, 'format_size')
    ];
    this.selectedComponentSubject = new Subject();
  }

  ngAfterViewInit(): void {
    this.selectedComponentSubject.takeUntil(this.unsubscribe).subscribe(component => {
      this.optionAvailability.updateOptionsState(component);
      this.cdr.detectChanges();
    });

    this.selectedComponentSubject.next(new SelectedComponent($('#Designer')));

    $(document).mousemove(event => {
      $('#Designer .hover').removeClass('hover');
      if ($(event.target).parents('#Designer').length > 0) {
        $(event.target).addClass('hover');
      }
    });

    $(document).click(event => {
      if ($(event.target).parents('#Designer').length > 0 || $(event.target).is('#Designer')) {
        $('#Designer .selected').removeClass('selected');
        this.selectedComponentSubject.next(new SelectedComponent($(event.target).addClass('selected')));
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
