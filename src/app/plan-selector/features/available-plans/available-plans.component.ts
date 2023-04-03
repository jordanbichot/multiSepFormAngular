import { Component, OnInit } from '@angular/core';
import { BasicPlanDetails } from '../../models/basic-plan-details';
import { StepControlService } from 'src/app/steps-sidebar/data-access/step-control.service';
import { PlanBuilderService } from '../../data-access/plan-builder.service';
import { AvailableResourcesProviderService } from '../../data-access/available-resources-provider.service';

@Component({
  selector: 'app-available-plans',
  templateUrl: './available-plans.component.html',
  styleUrls: ['./available-plans.component.scss'],
})
export class AvailablePlansComponent implements OnInit {
  public plansToChooseFrom: BasicPlanDetails[] = [];
  public selectedPlanId: number = -1;
  public isFacturationCycleMonthly$ =
    this.planBuilderService.isFacturationCycleMonthly$;

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

  selectPlan(planId: number) {
    this.selectedPlanId = planId;
    this.stepControlService.isCurrentStepCompleted = true;
    this.planBuilderService.selectedPlan =
      this.availableResourcesProviderService.getPlanById(this.selectedPlanId)!;
  }

  isPlanSelected(planId: number) {
    return planId === this.selectedPlanId;
  }
}
