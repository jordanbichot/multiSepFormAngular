import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
import { PlanBuilderService } from './data-access/plan-builder.service';
import { basicPlanDetails } from './models/basic-plan-details';
import { AvailableResourcesProviderService } from './data-access/available-resources-provider.service';
@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss'],
})
export class PlanSelectorComponent implements OnInit, OnDestroy {
  public plansToChooseFrom: basicPlanDetails[] = [];

  public endingText: '/mo' | '/yr' = '/mo';
  public selectedPlanId: number = -1;
  public isFacturationCycleMonthly: boolean = true;

  constructor(
    private stepControlService: StepControlService,
    private planBuilderService: PlanBuilderService,
    private availableResourcesProviderService: AvailableResourcesProviderService
  ) {}

  ngOnInit(): void {
    this.stepControlService.isCurrentStepCompleted = false;
    this.plansToChooseFrom =
      this.availableResourcesProviderService.getAvailablePlans();
  }

  ngOnDestroy(): void {
    this.planBuilderService.selectedPlan =
      this.availableResourcesProviderService.getPlanById(this.selectedPlanId)!;
    this.planBuilderService.isFacturationCycleMonthly =
      this.isFacturationCycleMonthly;
  }

  toggleFacturationCycle() {
    this.isFacturationCycleMonthly = !this.isFacturationCycleMonthly;
    this.endingText = this.isFacturationCycleMonthly ? '/mo' : '/yr';
  }

  selectPlan(planId: number) {
    this.selectedPlanId = planId;
    this.stepControlService.isCurrentStepCompleted = true;
  }

  isPlanSelected(planId: number) {
    return planId === this.selectedPlanId;
  }
}
