import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { StepControlServiceService } from '../../services/step-control-service.service';
import { PlanBuilderServiceService } from '../../services/plan-builder-service.service';
import { planDetails } from '../../models/planDetails';
import { basicPlanDetails } from '../../models/basicPlanDetails';

@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss'],
})
export class PlanSelectorComponent implements OnInit {
  constructor(
    private stepControlService: StepControlServiceService,
    private planBuilderService: PlanBuilderServiceService
  ) {}

  ngOnInit(): void {
    this.stepControlService.isCurrentStepCompleted = false;
    this.plansToChooseFrom = this.planBuilderService.availableMonthlyPlans;
  }

  plansToChooseFrom: basicPlanDetails[] = [];
  endingText: '/mo' | '/yr' = '/mo';
  selectedPlanIndex: number = -1;

  isFacturationCycleMonthly: boolean = true;
  isFacturationCycleYearly: boolean = false;

  currentFacturationCycle: 'Monthly' | 'Yearly' = 'Monthly';

  toggleFacturationCycle() {
    this.isFacturationCycleMonthly = !this.isFacturationCycleMonthly;
    this.isFacturationCycleYearly = !this.isFacturationCycleYearly;
    this.endingText = this.isFacturationCycleMonthly ? '/mo' : '/yr';
    this.currentFacturationCycle = this.isFacturationCycleMonthly
      ? 'Monthly'
      : 'Yearly';
    this.planBuilderService.selectedPlan.basicPlan.setFacturationType(
      this.currentFacturationCycle
    );
  }

  selectPlan(index: number) {
    this.selectedPlanIndex = index;
    this.planBuilderService.selectedPlan.basicPlan.setPlanType(
      this.plansToChooseFrom[index].plan
    );
    this.planBuilderService.selectedPlan.basicPlan.setFacturationType(
      this.currentFacturationCycle
    );

    this.stepControlService.isCurrentStepCompleted = true;
  }

  isPlanSelected(index: number) {
    if (index === this.selectedPlanIndex) return true;
    else {
      return false;
    }
  }
}
