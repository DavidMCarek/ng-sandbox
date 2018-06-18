import { BehaviorSubject } from 'rxjs';

import { ComponentType } from './components/component-type';
import { SelectedComponent } from './selectedComponent';

export class OptionAvailability {

  public canAddChildComponent: BehaviorSubject<boolean>;
  public canModifyGrid: BehaviorSubject<boolean>;
  public canDeleteComponent: BehaviorSubject<boolean>;
  public canChangeColor: BehaviorSubject<boolean>;
  public canEditText: BehaviorSubject<boolean>;
  public canChangeFontSize: BehaviorSubject<boolean>;

  constructor() {
    this.canAddChildComponent = new BehaviorSubject<boolean>(false);
    this.canModifyGrid = new BehaviorSubject<boolean>(false);
    this.canDeleteComponent = new BehaviorSubject<boolean>(false);
    this.canChangeColor = new BehaviorSubject<boolean>(false);
    this.canEditText = new BehaviorSubject<boolean>(false);
    this.canChangeFontSize = new BehaviorSubject<boolean>(false);
  }

  public updateOptionsState(component: SelectedComponent) {
    this.canAddChildComponent.next(this.updateCanAddChildComponent(component));
    this.canModifyGrid.next(this.updateCanModifyGrid(component));
    this.canDeleteComponent.next(this.updateCanDeleteComponent(component));
    this.canChangeColor.next(this.updateCanChangeColor(component));
    this.canEditText.next(this.updateCanEditText(component));
    this.canChangeFontSize.next(this.updateCanChangeFontSize(component));
  }

  private updateCanAddChildComponent(component: SelectedComponent): boolean {
    return component.type === ComponentType.Container || component.type === ComponentType.Designer;
  }

  private updateCanModifyGrid(component: SelectedComponent): boolean {
    return component.type === ComponentType.Container;
  }

  private updateCanDeleteComponent(component: SelectedComponent): boolean {
    return component.type !== ComponentType.Designer;
  }

  private updateCanChangeColor(component: SelectedComponent): boolean {
    return component.type !== ComponentType.Designer;
  }

  private updateCanEditText(component: SelectedComponent): boolean {
    return component.type === ComponentType.Text;
  }

  private updateCanChangeFontSize(component: SelectedComponent): boolean {
    return component.type === ComponentType.Text;
  }
}
