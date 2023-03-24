import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss'],
})
export class PlanSelectorComponent implements OnInit, OnDestroy {
  @Output() outputPlanType = new EventEmitter<string>();
  @Output() outputIsFacturationCycleMonthly = new EventEmitter<boolean>();
  @Output() outputIsFacturationCycleYearly = new EventEmitter<boolean>();
  @Output() outputIsValid = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.outputIsValid.emit(false);
  }

  ngOnDestroy(): void {}

  planType: string = '';
  planBasicCost: number = 0;

  isFacturationCycleMonthly: boolean = true;
  isFacturationCycleYearly: boolean = false;

  isArcadeSelected: boolean = false;
  isAdvancedSelected: boolean = false;
  isProSelected: boolean = false;

  isValid: boolean = false;

  emitOutputs() {
    this.outputIsFacturationCycleMonthly.emit(this.isFacturationCycleMonthly);
    this.outputIsFacturationCycleYearly.emit(this.isFacturationCycleYearly);
    this.outputPlanType.emit(this.planType);
    this.outputIsValid.emit(this.isValid);
  }

  toggleFacturationCycle() {
    this.isFacturationCycleMonthly = !this.isFacturationCycleMonthly;
    this.isFacturationCycleYearly = !this.isFacturationCycleYearly;
    this.emitOutputs();
  }

  selectArcadePlan() {
    this.isValid = true;
    this.isArcadeSelected = true;
    this.isAdvancedSelected = false;
    this.isProSelected = false;
    this.planType = 'Arcade';
    this.emitOutputs();
  }
  selectAdvancedPlan() {
    this.isValid = true;
    this.isArcadeSelected = false;
    this.isAdvancedSelected = true;
    this.isProSelected = false;
    this.planType = 'Advanced';
    this.emitOutputs();
  }
  selectProPlan() {
    this.isValid = true;
    this.isArcadeSelected = false;
    this.isAdvancedSelected = false;
    this.isProSelected = true;
    this.planType = 'Pro';
    this.emitOutputs();
  }
}
